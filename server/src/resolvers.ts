import author from './models/author';
import hashtag from './models/hashtag';

const resolvers = {
  Query: {
    hashtag: (root, { id }) => author.findOne({ id }),
    hashtags: () => hashtag.find({}),
  },
  Mutation: {
    addHashtag: (root, { name }) => new hashtag({ name }).save(),
    // deleteAuthor: (root, { id }) => author.findOneAndRemove({ id }),
    // updateAuthor: (root, { id, name }) => author.findOneAndUpdate({ id }, { name }),
  },
};

export default resolvers;
