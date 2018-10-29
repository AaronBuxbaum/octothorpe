import { Schema, model } from 'mongoose';

const hashtagSchema = new Schema({
  title: String!,
  intensity: Number
});

const hashtagModel = model('hashtag', hashtagSchema);

export default hashtagModel;
