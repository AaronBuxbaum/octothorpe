import gql from 'graphql-tag';

export const LOGGED_IN_USER = gql`
    query {
        user {
            profileImage
            username
        }
    }
`;
