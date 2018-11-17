import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import context from './context';
import './database';
import MatchesAPI from './models/MatchesAPI';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    matchesAPI: new MatchesAPI(),
  }),
  context,
});

const initializeServer = async () => {
  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
};

initializeServer();
