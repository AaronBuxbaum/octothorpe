import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { PROFILE } from '../router/pages';
import { pageRoutes } from '../router/routeTo';

const Avatar = ({ imageUrl }) => (
  <Link to={pageRoutes[PROFILE]}>
    <img
      src={imageUrl}
      alt="Avatar"
      className="avatar"
    />
  </Link>
);

export default Avatar;
