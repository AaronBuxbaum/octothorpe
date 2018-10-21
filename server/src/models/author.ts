import { Schema, model } from 'mongoose';
import uuid from 'node-uuid';

const authorSchema = new Schema({
    id: { type: String, default: uuid.v1 },
    name: String,
    age: Number,
    books: [String]
});

const authorModel = model('author', authorSchema);

export default authorModel;
