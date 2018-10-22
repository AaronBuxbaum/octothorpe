import { gql } from 'apollo-server';

const typeDefs = gql`
    type Query {
        hashtag(id: String): Hashtag,
        hashtags: [Hashtag]
    }

    type Hashtag {
        id: String
        name: String
    }

    type Mutation {
        addHashtag(name: String!): Hashtag,
    }
`;

export default typeDefs;
