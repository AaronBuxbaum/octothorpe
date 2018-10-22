import author from './models/author';

const resolvers = {
  Query: {
    authors: () => author.find({}),
    author: (root, { id }) => author.findOne({ id }),
    test: () => {
      return 'test';
    },
  },
  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      console.log(name, age, books);
      const author = new author({ name, age, books });
      return author.save();
    },
    deleteAuthor: (root, { id }) => {
      return author.findOneAndRemove({ id });
    },
    updateAuthor: (root, { id, name }) => {
      return author.findOneAndUpdate({ id }, { name });
    },
  },
};

export default resolvers;
