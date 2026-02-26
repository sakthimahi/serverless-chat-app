import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event) => {
    const connectionId = event.requestContext.connectionId;

    await client.send(new DeleteItemCommand({
        TableName: "Connections",
        Key: {
            connectionId: { S: connectionId }
        }
    }));

    return { statusCode: 200 };
};
