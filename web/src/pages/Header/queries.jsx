import gql from 'graphql-tag';

export const LOGGED_IN_USER = gql`
    query {
        user {
            image
            username
            firstName
            lastName
        }
    }
`;
