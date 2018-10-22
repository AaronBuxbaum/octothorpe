import { Schema, model } from 'mongoose';
import { v1 as getUID } from 'node-uuid';

const hashtagSchema = new Schema({
  id: { type: String, default: getUID() },
  name: String,
});

const hashtagModel = model('hashtag', hashtagSchema);

export default hashtagModel;
