import ApolloClient from 'apollo-boost';
import request from './request';

const uri = 'http://localhost:4000';

export default new ApolloClient({
  uri,
  request,
});
