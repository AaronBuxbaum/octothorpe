import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import './database';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const initializeServer = async () => {
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
};

initializeServer();
