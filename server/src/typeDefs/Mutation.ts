import { gql } from 'apollo-server';

type SignupInfo = {
    username: String,
    password: String,
};

const Mutation = gql`
    type Mutation {
        addHashtag(name: String!, intensity: Float!): Hashtag
        updateHashtag(name: String!, intensity: Float!): Hashtag
        deleteHashtag(name: String!): Hashtag
        # signup(username: String!, password: String!): User
        signup(info: SignupInfo): User
        login(username: String!, password: String!): User
    }
`;

export default Mutation;
