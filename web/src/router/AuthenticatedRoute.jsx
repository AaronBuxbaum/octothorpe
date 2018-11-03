import React from 'react';
import { filter } from 'lodash';
import { Route } from 'react-router-dom';
import { getToken } from '../storage/localStorage';
import RedirectToLogin from './RedirectToLogin';
import pages from './pages';

const authenticationPages = filter(pages, ({ requiresAuth }) => requiresAuth);

const isUnauthenticated = (path) => {
    return !!authenticationPages[path] && !getToken();
}

const AuthenticatedRoute = ({
    component: Component,
    ...props
}) => (
        <Route
            {...props}
            render={(props) => (
                isUnauthenticated(props.match.path) ?
                    <RedirectToLogin /> :
                    <Component {...props} />
            )}
        />
    );

export default AuthenticatedRoute;
