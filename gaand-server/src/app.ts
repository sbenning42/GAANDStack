import dotenv from 'dotenv';
import { GAANDApp } from "./gaand/gaand-app";

dotenv.config();

const {
    PORT: port,
    NEO4J_URI: uri,
    NEO4J_USER: user,
    NEO4J_PASSWORD: password,
    GRAPHQL_PATH: path,
    TYPEDEFS_FILEPATH: typeDefsFilepath,
} = process.env;

const resolvers = {
    Query: {
        hello: () => 'Hello dev !'
    }
}

const app = new GAANDApp({
    path, typeDefsFilepath,
    resolvers: resolvers,
    neo4j: { uri, user, password },
    apollo: { context: {} },
    neo4jGraphqlJs: {
        query: { exclude: [] },
        mutation: { exclude: [] },
    }
});

app.listen({ port: +port }, () => {
    console.log(`Server started at http://localhost:${port}`);
});
