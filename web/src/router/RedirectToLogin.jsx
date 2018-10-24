import { compose, withProps } from 'recompose';
import { Redirect } from 'react-router-dom';

const RedirectToLogin = compose(
    withProps({ to: '/login' }),
)(Redirect);

export default RedirectToLogin;
