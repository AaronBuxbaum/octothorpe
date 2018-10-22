import { Schema, model } from 'mongoose';
import { v1 as getUID } from 'node-uuid';

const authorSchema = new Schema({
  id: { type: String, default: getUID() },
  name: String,
  age: Number,
  books: [String],
});

const authorModel = model('author', authorSchema);

export default authorModel;
