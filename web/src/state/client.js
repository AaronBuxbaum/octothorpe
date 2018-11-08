import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import requestLink from './requestLink';
import errorLink from './errorLink';
import uploadLink from './uploadLink';

const link = ApolloLink.from([
  errorLink,
  requestLink,
  uploadLink,
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
