import { DynamoDBClient, ScanCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi";

const db = new DynamoDBClient({});

export const handler = async (event) => {

    const body = JSON.parse(event.body);
    const { message, roomId, sender } = body;

    const endpoint = event.requestContext.domainName + "/" + event.requestContext.stage;

    const api = new ApiGatewayManagementApiClient({
        endpoint: "https://" + endpoint
    });

    const connections = await db.send(new ScanCommand({
        TableName: "Connections"
    }));

    for (const item of connections.Items) {
        if (item.roomId.S === roomId) {
            try {
                await api.send(new PostToConnectionCommand({
                    ConnectionId: item.connectionId.S,
                    Data: JSON.stringify({ message, sender })
                }));
            } catch (err) {
                console.log("Failed:", err);
            }
        }
    }

    return { statusCode: 200 };
};
