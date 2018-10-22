import { connect, connection } from 'mongoose';

const MONGO_URI = 'mongodb://database/testing';

connect(MONGO_URI);

connection.on('open', () => {
  console.log('Connect to mongo server.');
});

connection.on('error', (err) => {
  console.log('Could not connect to mongo server!');
  console.log(err);
});

export default connection;
