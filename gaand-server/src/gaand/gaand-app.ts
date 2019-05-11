import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Application, RequestHandler } from 'express';
import { ApolloServerExpressConfig, ApolloServer, IResolvers } from 'apollo-server-express';
import { v1 as Neo4j } from 'neo4j-driver';
import { makeAugmentedSchema } from 'neo4j-graphql-js';

export class Neo4jConfig {
    constructor(
        public uri: string,
        public user: string,
        public password: string,
    ) {}
}

export class GAANDAppConfig {
    constructor(
        public path: string,
        public typeDefsFilepath: string,
        public resolvers: IResolvers,
        public neo4j: Neo4jConfig,
        public apollo: ApolloServerExpressConfig,
        public neo4jGraphqlJs?: any,
    ) {}
}

export class GAANDApp {

    app: Application;
    server: ApolloServer;

    constructor(
        public config: GAANDAppConfig,
    ) {

        /**
         * Get configs
         */
        const { typeDefsFilepath, path, resolvers, neo4jGraphqlJs } = config;
        const { uri, user, password } = config.neo4j;
        const { context } = config.apollo;

        /**
         * Augmente context for custom resolvers and neo4j-graphql-js 
         * Makes context a function to allow custom middlewares
         */
        (context as any).GAANDAppConfig = config;
        (context as any).driver = Neo4j.driver(uri, Neo4j.auth.basic(user, password));
        config.apollo.context = req => {
            (context as any).req = req;
            return context;
        };

        /**
         * Augment schema with neo4j-graphql-js
         */
        const neo4jGraphqlJsConfig = neo4jGraphqlJs || {
            query: { exclude: [] },
            mutation: { exclude: [] }
        };
        config.apollo.schema = makeAugmentedSchema({
            typeDefs: fs.readFileSync(typeDefsFilepath, 'utf8'),
            resolvers: resolvers,
            config: neo4jGraphqlJsConfig
        });

        /**
         * Instanciate app and server
         */
        this.server = new ApolloServer(config.apollo);
        this.app = express();
        
        /**
         * Apply default middlewares
         */
        this.app.use(
            bodyParser.urlencoded({ extended: true }),
            bodyParser.json(),
            cors(),
        );

        /**
         * Set graphql endpoint
         */
        this.server.applyMiddleware({ app: this.app, path });
    }

    use(...handlers: RequestHandler[]) {
        this.app.use(...handlers);
    }

    listen<Config extends { port: number }>(config: Config, fn: (...args: any[]) => void) {
        this.app.listen(config, fn);
    }
}
