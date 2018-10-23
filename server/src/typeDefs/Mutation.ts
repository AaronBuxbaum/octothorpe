import { gql } from 'apollo-server';

const Mutation = gql`
    type Mutation {
        addHashtag(name: String!, intensity: Float!): Hashtag,
        updateHashtag(name: String!, intensity: Float!): Hashtag,
        deleteHashtag(name: String!): Hashtag,
        signup(username: String!, password: String!): User,
        login(username: String!, password: String!): User,
    }
`;

export default Mutation;
