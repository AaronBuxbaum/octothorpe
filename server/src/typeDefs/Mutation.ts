import { gql } from 'apollo-server';

const Mutation = gql`
    type Mutation {
        addHashtag(name: String!, intensity: Float!): Hashtag
        updateHashtag(name: String!, intensity: Float!): Hashtag
        deleteHashtag(name: String!): Hashtag
        signup(userInfo: UserAuthentication!): User
        login(userInfo: UserAuthentication!): User
    }
`;

export default Mutation;
