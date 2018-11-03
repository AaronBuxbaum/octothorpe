import React from 'react';
import { branch, renderNothing } from 'recompose';
import { compose, graphql } from 'react-apollo';
import { get } from 'lodash';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import './header.scss';
import { PROFILE } from '../router/pages';

const LOGGED_IN_USER = gql`
  query LoggedInUser {
    user {
      profileImage
    }
  }
`;

const getProfileImage = (data) => get(data, 'user.profileImage');

const isNotLoggedIn = ({ data }) => !data.user;

const Avatar = ({ data }) => (
  <Link to={PROFILE.path}>
    <img
      src={getProfileImage(data)}
      alt="Avatar"
      className="avatar"
    />
  </Link>
);

const enhance = compose(
  graphql(LOGGED_IN_USER),
  branch(isNotLoggedIn, renderNothing),
);

export default enhance(Avatar);
