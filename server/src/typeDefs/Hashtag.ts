import { gql } from 'apollo-server';

const Hashtag = gql`
    type Hashtag {
        id: ID
        title: String
    }
`;

export default Hashtag;
