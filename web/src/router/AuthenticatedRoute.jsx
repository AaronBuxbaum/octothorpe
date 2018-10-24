import { Component } from 'react';
import { Route } from 'react-router-dom';
import { getToken } from '../storage/localStorage';
import RedirectToLogin from './RedirectToLogin';

const isAuthenticated = () => {
    return getToken()
};

class AuthenticatedRoute extends Component {
    render() {
        const {
            component: Component,
            ...props
        } = this.props

        return (
            <Route
                {...props}
                render={(props) => (
                    isAuthenticated() ?
                        <Component {...props} /> :
                        <RedirectToLogin />
                )}
            />
        )
    }
}

export default AuthenticatedRoute;
