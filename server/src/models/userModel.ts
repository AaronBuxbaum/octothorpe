import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: String!,
  password: String!,
  firstName: String,
  lastName: String,
});

const userModel = model('user', userSchema);

export default userModel;
