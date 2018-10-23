import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import userModel from '../../../models/userModel';
import { APP_SECRET } from './constants';

const getUser = (username) => userModel.findOne({ username });

const login = async (root, args) => {
    const user = await getUser(args.username);

    if (!user) {
        throw new Error('No such user found')
    }

    const valid = await compare(args.password, user.password);
    if (!valid) {
        throw new Error('Invalid password')
    }

    const token = sign({ userId: user.id }, APP_SECRET)
    return { token };
};

export default login;
