const { ApolloServer, gql } = require('apollo-server');
const loadDB = require('./database');

const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    test: String
    books: [Book]
  }
`;

const resolvers = {
    Query: {
        test: async () => {
            const db = await loadDB();
            db.collection('some_collection').insertOne({ 'test': Math.random() });
            const a = await db.collection('some_collection').findOne();
            console.log(a);
            return a.test;
        },
        books: () => books,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});