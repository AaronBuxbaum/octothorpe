import { Schema, model } from 'mongoose';

const hashtagSchema = new Schema({
  title: String!,
});

const hashtagModel = model('hashtag', hashtagSchema);

export default hashtagModel;
