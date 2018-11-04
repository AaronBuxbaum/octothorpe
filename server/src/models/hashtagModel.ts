import { Schema, model } from 'mongoose';

const hashtagSchema = new Schema({
  user: String!,
  title: String!,
});

const hashtagModel = model('hashtag', hashtagSchema);

export default hashtagModel;
