import { verify } from 'jsonwebtoken';
import { APP_SECRET } from '../authentication/constants';

const getUsername = (context) => {
    const Authorization = context.request.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { username } = verify(token, APP_SECRET);
        return username;
    }

    throw new Error('Not authenticated');
}

export default getUsername;
