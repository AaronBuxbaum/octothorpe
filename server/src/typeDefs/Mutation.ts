import { gql } from 'apollo-server';

const Mutation = gql`
    type Mutation {
        addHashtag(title: String!): Hashtag
        deleteHashtag(id: ID!): Hashtag
        signup(userInfo: UserAuthentication!): User
        login(userInfo: UserAuthentication!): User
    }
`;

export default Mutation;
