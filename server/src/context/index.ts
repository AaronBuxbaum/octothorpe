import getUsername from '../utils/getUsername';

const context = (context) => {
    const user = getUsername(context);
    return { user };
};

export default context;