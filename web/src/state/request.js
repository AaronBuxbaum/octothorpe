import { getToken } from '../storage/localStorage';

const request = async (operation) => {
  const token = await getToken();
  const authorization = token ? `Bearer ${token}` : '';

  operation.setContext({
    headers: {
      authorization,
    },
  });
};

export default request;
