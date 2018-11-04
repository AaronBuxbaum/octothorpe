import React from 'react';
import { branch, renderNothing } from 'recompose';
import { compose, graphql } from 'react-apollo';
import './header.scss';
import { Link } from 'react-router-dom';
import Paragraph from 'grommet/components/Paragraph';
import { PROFILE } from '../../router/pages';
import { LOGGED_IN_USER } from './queries';

const buildFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

const AppTitle = ({ data }) => (
    <Link to={PROFILE.path}>
        <Paragraph className="username">
            {buildFullName(data.user)}
        </Paragraph>
    </Link>
);

const isLoggedOut = ({ data }) => !data.user;

const enhance = compose(
    graphql(LOGGED_IN_USER),
    branch(isLoggedOut, renderNothing),
);

export default enhance(AppTitle);


