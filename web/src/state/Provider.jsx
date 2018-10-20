import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './client';

const StateProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default StateProvider;
