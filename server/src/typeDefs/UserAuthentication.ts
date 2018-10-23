import { gql } from 'apollo-server';

const UserAuthentication = gql`
    input UserAuthentication {
        username: String!
        password: String!
        rememberMe: Boolean
    }
`;

export default UserAuthentication;
