import { gql } from 'apollo-server';

const Query = gql`
    type Query {
        hashtag(id: String): Hashtag,
        hashtags: [Hashtag]
    }
`;

export default Query;
