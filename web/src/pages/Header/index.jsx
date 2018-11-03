import React from 'react';
import './header.scss';
import Head from 'grommet/components/Header';
import AppTitle from './AppTitle';
import PageTitle from './PageTitle';
import Menu from './Menu';

const Header = () => (
  <>
    <Head style={{ justifyContent: 'space-between' }}>
      <AppTitle />
      <Menu />
    </Head>
    <PageTitle />
  </>
);

export default Header;
