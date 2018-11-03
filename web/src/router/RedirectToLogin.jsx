import { compose, withProps } from 'recompose';
import { Redirect } from 'react-router-dom';

const to = '/login';

const RedirectToLogin = compose(
    withProps({ to }),
)(Redirect);

export default RedirectToLogin;
