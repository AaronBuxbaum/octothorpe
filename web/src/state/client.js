import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import onError from './onError';
import httpLink from './httpLink';

const buildLinks = () => ApolloLink.from([
  onError,
  httpLink,
]);

const client = new ApolloClient({
  link: buildLinks(),
  cache: new InMemoryCache()
});

export default client;
