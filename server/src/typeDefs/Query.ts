import { gql } from 'apollo-server';

const Query = gql`
    type Query {
        hashtag(id: String): Hashtag
        hashtags: [Hashtag]
        matches: [Match]
        suggestions(title: String): [String]
        user: User
    }
`;

export default Query;
