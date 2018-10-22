import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
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
