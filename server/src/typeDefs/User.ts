import { gql } from 'apollo-server';

const User = gql`
    type User {
        token: String
        username: String
        firstName: String
        lastName: String
        profileImage: String
    }
`;

export default User;
