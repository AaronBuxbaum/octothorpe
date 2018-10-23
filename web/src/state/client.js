import ApolloClient from 'apollo-boost';
import link from './link';

export default new ApolloClient({
  link,
});
