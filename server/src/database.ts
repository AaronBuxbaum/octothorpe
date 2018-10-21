import { MongoClient } from 'mongodb';

const MONGO_URL = 'mongodb://database:27017/testing';

let db;

const loadDB = async () => {
  if (db) {
    return db;
  }
  try {
    const client = await MongoClient.connect(MONGO_URL);
    db = client.db('testing');
  } catch (err) { console.error(err); }
  return db;
};

export default loadDB;
