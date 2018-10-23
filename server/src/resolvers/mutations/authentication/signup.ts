import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import userModel from '../../../models/userModel';
import { APP_SECRET } from './constants';

const createUser = async (args) => {
    const { username } = args;
    const password = await hash(args.password, 10);
    const user = {
        username,
        password,
    };
    return new userModel(user).save();
}

const signup = async (root, args) => {
    console.log(args);
    const { username } = await createUser(args);
    const token = sign(username, APP_SECRET);
    return { token };
};

export default signup;
