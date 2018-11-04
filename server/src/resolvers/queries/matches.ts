import matchModel from '../../models/matchModel';

const exampleMatches = [
    {
        username: 'aaron',
        firstName: 'Aaron',
        lastName: 'Buxbaum',
        rating: 0.83,
        image: 'http://placekitten.com/g/400/400'
    },
    {
        username: 'john',
        firstName: 'John',
        rating: 0.91,
        image: 'http://placekitten.com/g/401/401'
    },
    {
        username: 'elon',
        firstName: 'Elon',
        lastName: 'Musk',
        rating: 0.01,
        image: 'http://placekitten.com/g/402/402'
    }
];

const matches = () => exampleMatches; // matchModel.find({}) || 

export default matches;
