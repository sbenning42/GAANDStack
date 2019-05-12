import fs from 'fs';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { v1 as Neo4j } from 'neo4j-driver';
import { makeAugmentedSchema } from 'neo4j-graphql-js';

dotenv.config();
const {
    PORT,
    NEO4J_URI,
    NEO4J_USER,
    NEO4J_PASSWORD,
    GRAPHQL_PATH,
    TYPEDEFS_FILEPATH,
} = process.env;

const app = express();
app.use(
    bodyParser.json(),
    cors()
);

const context: any = {
    driver: Neo4j.driver(NEO4J_URI, Neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)),
};
const server = new ApolloServer({
    context: (req: Request) => {
        context.req = req;
        return context;
    },
    schema: makeAugmentedSchema({
        typeDefs: fs.readFileSync(TYPEDEFS_FILEPATH, 'utf8'),
        resolvers: {
            Query: {
                hello: () => 'Hello dev !'
            }
        },
        config: {
            query: { exclude: [] },
            mutation: { exclude: [] }
        }
    })
});

server.applyMiddleware({ app, path: GRAPHQL_PATH });

app.listen({ port: PORT }, () => {
    console.log(`GAAND Server running at http://localhost:${PORT}${GRAPHQL_PATH}`);
});
