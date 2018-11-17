import { Schema, model } from 'mongoose';
import hashtagModel from './hashtagModel';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, index: true },
  password: String!,
  firstName: String,
  lastName: String,
  image: String,
  hashtags: [{ type: Schema.Types.ObjectId, ref: hashtagModel }]
});

const userModel = model('user', userSchema);

export default userModel;
