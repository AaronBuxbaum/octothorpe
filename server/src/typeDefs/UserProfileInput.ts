import { gql } from 'apollo-server';

const UserProfileInput = gql`
    input UserProfileInput {
        firstName: String
        lastName: String
        image: String
    }
`;

export default UserProfileInput;
