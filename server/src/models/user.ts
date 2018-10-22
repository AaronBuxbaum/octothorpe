import { Schema, model } from 'mongoose';

var userSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    passwordHash: String,
    passwordSalt: String
});

const userModel = model('user', userSchema);

export default userModel;
