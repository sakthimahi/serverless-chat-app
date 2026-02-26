import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event) => {
    const connectionId = event.requestContext.connectionId;
    const roomId = event.queryStringParameters?.roomId || "default";
    const username = event.queryStringParameters?.username || "guest";

    await client.send(new PutItemCommand({
        TableName: "Connections",
        Item: {
            connectionId: { S: connectionId },
            roomId: { S: roomId },
            username: { S: username }
        }
    }));

    return { statusCode: 200 };
};
