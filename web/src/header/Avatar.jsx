import React from 'react';
import { compose, graphql } from 'react-apollo';
import { get } from 'lodash';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import './header.scss';
import { PROFILE } from '../router/pages';
import { pageRoutes } from '../router/routeTo';

const LOGGED_IN_USER = gql`
  query LoggedInUser {
    user {
      profileImage
    }
  }
`;

const getProfileImage = (data) => get(data, 'user.profileImage');

const Avatar = ({ data }) => (
  <Link to={pageRoutes[PROFILE]}>
    <img
      src={getProfileImage(data)}
      alt="Avatar"
      className="avatar"
    />
  </Link>
);

const enhance = compose(
  graphql(LOGGED_IN_USER),
);

export default enhance(Avatar);
