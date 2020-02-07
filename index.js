const express = require("express");
const { ApolloServer } = require("apollo-server-express");
// const { typeDefs, resolvers } = require("./Graphql/users");

const typeDefs = require("./Graphql/typeDefs");
const resolvers = require("./Graphql/resolvers");

const models = require("./models");

const app = express();
const server = new ApolloServer({ typeDefs, resolvers, context: { models } });

server.applyMiddleware({ app });

app.get("/", (req, res) => res.send("welcome"));

app.listen(5000, () => console.log("🚀 Server ready at port 5000"));
