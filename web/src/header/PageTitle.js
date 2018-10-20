import React from 'react';
import { compose, mapProps } from 'recompose';
import { withRouter } from 'react-router-dom';
import Heading from 'grommet/components/Heading';
import { pageRoutes } from '../router/routeTo';

const mapTitle = ({ location }) => ({
  title: Object.keys(pageRoutes).find(key => pageRoutes[key] === location.pathname),
});

const PageTitle = ({ title }) => (
  <Heading>
    {title}
  </Heading>
);

export default compose(
  withRouter,
  mapProps(mapTitle),
)(PageTitle);
