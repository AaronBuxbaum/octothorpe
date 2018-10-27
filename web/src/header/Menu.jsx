import React from 'react';
import MenuDropdown from './MenuDropdown';
import Avatar from './Avatar';
import './header.scss';

const Menu = () => (
  <div className="menu">
    <Avatar />
    <MenuDropdown />
  </div>
);

export default Menu;