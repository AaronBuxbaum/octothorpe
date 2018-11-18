import getAuthorization from '../utils/getAuthorization';

const context = (context) => ({
    ...getAuthorization(context),
});

export default context;