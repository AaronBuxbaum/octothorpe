import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, index: true },
  password: String!,
  firstName: String,
  lastName: String,
});

const userModel = model('user', userSchema);

export default userModel;
