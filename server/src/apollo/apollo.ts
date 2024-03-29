import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./../graphql/type-defs";
import { resolvers } from "./../graphql/resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
        return {
            req, res, user: req.user
        }
    }
});

export const connectApollo = (app, path, cors) => {
    server.applyMiddleware({ app, path, cors });
}