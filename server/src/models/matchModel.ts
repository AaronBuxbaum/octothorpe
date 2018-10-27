import { Schema, model } from 'mongoose';

const matchSchema = new Schema({
    username: String!,
    firstName: String!,
    lastName: String,
    rating: Number,
});

const matchModel = model('match', matchSchema);

export default matchModel;
