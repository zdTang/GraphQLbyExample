const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "hello graphql world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then((serverInfo) => console.log(`Server is running at ${serverInfo.url}`));
