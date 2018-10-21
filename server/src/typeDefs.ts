import { gql } from 'apollo-server';

const typeDefs = gql`
    type Author {
        id: String
        age: Int
        name: String
        books: [String]
    }

    type Query {
        authors: [Author]
        author(id: String): Author
        test: String
    }

    type Mutation {
        addAuthor(name: String!, age: Int!, books: [String]!): Author,
        deleteAuthor(id: String!): Author,
        updateAuthor(id: String!, name: String!): Author
    }
`;

export default typeDefs;
