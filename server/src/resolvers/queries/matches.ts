import matchModel from '../../models/matchModel';

const exampleMatches = [
    {
        username: 'aaron',
        firstName: 'Aaron',
        lastName: 'Buxbaum',
        rating: 0.83,
    },
    {
        username: 'john',
        firstName: 'John',
        rating: 0.91,
    },
    {
        username: 'elon',
        firstName: 'Elon',
        lastName: 'Musk',
        rating: 0.01,
    }
];

const matches = () => exampleMatches; // matchModel.find({}) || 

export default matches;
