const exampleMatches = [
    {
        username: 'aaron',
        firstName: 'Aaron',
        lastName: 'Buxbaum',
        rating: 0.83,
        image: 'http://placekitten.com/g/300/300'
    },
    {
        username: 'john',
        firstName: 'John',
        rating: 0.91,
        image: 'http://placekitten.com/g/301/301'
    },
    {
        username: 'elon',
        firstName: 'Elon',
        lastName: 'Musk',
        rating: 0.01,
        image: 'http://placekitten.com/g/302/302'
    }
];

const matches = (root, args, context) => {
    const { dataSources, user } = context;
    return dataSources.matchesAPI.getMatches(user);
};

export default matches;
