import { gql } from 'apollo-server';

const Hashtag = gql`
    type Hashtag {
        id: ID
        title: String
        intensity: Float
    }
`;

export default Hashtag;
