import { gql } from 'apollo-server';

const User = gql`
    type User {
        token: String
    }
`;

export default User;
