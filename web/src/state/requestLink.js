import { getToken } from '../storage/localStorage';
import { ApolloLink, Observable } from 'apollo-link';

const request = async (operation) => {
  const token = await getToken();
  const authorization = token ? `Bearer ${token}` : '';

  operation.setContext({
    headers: {
      authorization,
    },
  });
};

const requestLink = new ApolloLink((operation, forward) =>
  new Observable((observer) => {
    let handle;
    Promise.resolve(operation)
      .then((oper) => request(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
);

export default requestLink;
