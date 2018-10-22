import hashtag from './models/hashtag';

const resolvers = {
  Query: {
    hashtag: (root, { id }) => hashtag.findOne({ id }),
    hashtags: () => hashtag.find({}),
  },
  Mutation: {
    addHashtag: (root, { name, intensity }) => new hashtag({ name, intensity }).save(),
    deleteHashtag: (root, { id }) => hashtag.findOneAndRemove({ id }),
    updateHashtag: (root, { id, intensity }) => hashtag.findOneAndUpdate({ id }, { intensity }),
  },
};

export default resolvers;
