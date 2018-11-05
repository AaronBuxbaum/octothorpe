import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import userModel from '../../../models/userModel';
import { APP_SECRET } from './constants';

const getUser = (username) => userModel.findOne({ username });

const login = async (root, { userInfo }) => {
    const user = await getUser(userInfo.username);

    if (!user) {
        throw new Error('No such user found');
    }

    const valid = await compare(userInfo.password, user.password);
    if (!valid) {
        throw new Error('Invalid password');
    }

    const token = sign({ userId: user.id }, APP_SECRET);

    const { firstName, image, lastName } = user;
    return {
        firstName,
        image,
        lastName,
        token,
    };
};

export default login;
