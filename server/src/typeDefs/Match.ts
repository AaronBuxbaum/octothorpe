import { gql } from 'apollo-server';

const Match = gql`
    type Match {
        firstName: String
        lastName: String
        rating: Float
        username: String
        image: String
    }
`;

export default Match;
