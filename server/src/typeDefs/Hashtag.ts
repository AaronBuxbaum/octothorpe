import { gql } from 'apollo-server';

const Hashtag = gql`
    type Hashtag {
        id: ID
        name: String
        intensity: Float
    }
`;

export default Hashtag;
