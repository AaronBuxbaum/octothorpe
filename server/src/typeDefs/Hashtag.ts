import { gql } from 'apollo-server';

const Hashtag = gql`
    type Hashtag {
        id: String
        name: String
        intensity: Number
    }
`;

export default Hashtag;
