import { verify } from 'jsonwebtoken';
import { APP_SECRET } from '../resolvers/mutations/authentication/constants';

const getUsername = (context) => {
    const Authorization = context.req.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { userId } = verify(token, APP_SECRET);
        return userId;
    }

    // throw new Error('Not authenticated');
}

export default getUsername;
