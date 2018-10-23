import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { getToken } from '../storage/localStorage';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export default authLink.concat(httpLink);
