import { gql } from 'apollo-server';

const File = gql`
    type File {
        filename: String!
        mimetype: String!
        encoding: String!
    }
`;

export default File;
