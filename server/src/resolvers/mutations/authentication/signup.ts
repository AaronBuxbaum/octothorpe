import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import userModel from '../../../models/userModel';
import { APP_SECRET, HASH_SALT } from './constants';

const createUser = async (userInfo) => {
    const { username } = userInfo;
    const password = await hash(userInfo.password, HASH_SALT);
    const user = {
        username,
        password,
    };
    return new userModel(user).save();
}

const signup = async (root, { userInfo }) => {
    const { username } = await createUser(userInfo);
    const token = sign(username, APP_SECRET);
    return { token };
};

export default signup;
