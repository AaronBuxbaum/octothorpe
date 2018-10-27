import { gql } from 'apollo-server';

const Query = gql`
    type Query {
        hashtag(id: String): Hashtag
        hashtags: [Hashtag]
        matches: [Match]
        user: User
    }
`;

export default Query;
