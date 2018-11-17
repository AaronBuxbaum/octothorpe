import { gql } from 'apollo-server';

const User = gql`
    type User {
        token: String
        username: String
        firstName: String
        lastName: String
        rating: Float
        image: String
        hashtags: [Hashtag]
    }
`;

export default User;
