import { gql } from 'apollo-server';

const Mutation = gql`
    type Mutation {
        addHashtag(name: String!): Hashtag,
    }
`;

export default Mutation;
