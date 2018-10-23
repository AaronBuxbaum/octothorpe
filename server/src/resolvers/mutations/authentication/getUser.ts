import { verify } from 'jsonwebtoken';
import { APP_SECRET } from './constants';

const getUser = (context) => {
    const Authorization = context.request.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { userId } = verify(token, APP_SECRET);
        return userId;
    }

    throw new Error('Not authenticated');
}

export default getUser;
