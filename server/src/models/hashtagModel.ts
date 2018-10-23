import { Schema, model } from 'mongoose';

const hashtagSchema = new Schema({
  name: String!,
});

const hashtagModel = model('hashtag', hashtagSchema);

export default hashtagModel;
