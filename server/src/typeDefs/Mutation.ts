import { gql } from 'apollo-server';

const Mutation = gql`
    type Mutation {
        addHashtag(name: String!, intensity: Number!): Hashtag,
    }
`;

export default Mutation;
