import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import context from './context';
import './database';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

const initializeServer = async () => {
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
};

initializeServer();
