import gql from 'graphql-tag';

export const MATCHES = gql`
  query {
    matches {
      firstName
      lastName
      image
      rating
      username
    }
  }
`;
