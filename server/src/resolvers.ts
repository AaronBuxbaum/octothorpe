import authorModel from './models/author';

const resolvers = {
    Query: {
        authors: () => authorModel.find({}),
        author: (root, { id }) => authorModel.findOne({ id }),
        test: () => {
            return 'test';
        },
    },
    Mutation: {
        addAuthor: (root, { name, age, books }) => {
            console.log(name, age, books);
            const author = new authorModel({ name, age, books });
            return author.save();
        },
        deleteAuthor: (root, { id }) => {
            return authorModel.findOneAndRemove({ id });
        },
        updateAuthor: (root, { id, name }) => {
            return authorModel.findOneAndUpdate({ id }, { name });
        }
    }
};

export default resolvers;
