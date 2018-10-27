import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Head from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import PageTitle from './PageTitle';
import Menu from './Menu';
import { HOME } from '../router/pages';
import { pageRoutes } from '../router/routeTo';

const LeftHandSide = () => (
  <Link to={pageRoutes[HOME]}>
    <Title>Octothorpe</Title>
  </Link>
);

const Header = () => (
  <>
    <Head style={{ justifyContent: 'space-between' }}>
      <LeftHandSide />
      <Menu />
    </Head>
    <PageTitle />
  </>
);

export default Header;
