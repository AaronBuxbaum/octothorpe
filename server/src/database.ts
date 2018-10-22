import { connect, connection } from 'mongoose';

const MONGO_URI = 'mongodb://database/testing';
const MONGO_OPTIONS = { useNewUrlParser: true };

connect(MONGO_URI, MONGO_OPTIONS);

connection.on('open', () => {
  console.log('Connect to mongo server.');
});

connection.on('error', (err) => {
  console.log('Could not connect to mongo server!');
  console.log(err);
});

export default connection;
