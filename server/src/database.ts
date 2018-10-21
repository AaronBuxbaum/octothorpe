import { connect, connection } from 'mongoose';

const MONGO_URI = 'mongodb://database:27017/testing';

connect(MONGO_URI);

connection.once('open', () => {
  console.log(`Connection to database was successful.`)
});

export default connection;
