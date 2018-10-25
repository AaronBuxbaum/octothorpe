import React from 'react';

const randomData = [
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

const Matches = () => (
    <div>
        {randomData.map(({ firstName, lastName }) =>
            <div>
                <span>{firstName} {lastName}</span>
            </div>)
        }
    </div>
);

export default Matches;
