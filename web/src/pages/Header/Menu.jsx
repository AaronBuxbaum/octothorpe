import React from 'react';
import MenuDropdown from './MenuDropdown';
import Avatar from './Avatar';
import UserName from './UserName';
import './header.scss';

const Menu = () => (
  <div className="menu">
    <UserName />
    <Avatar />
    <MenuDropdown />
  </div>
);

export default Menu;