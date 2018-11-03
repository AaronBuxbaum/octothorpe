import React from 'react';
import { get } from 'lodash';
import { compose, mapProps } from 'recompose';
import { withRouter } from 'react-router-dom';
import Heading from 'grommet/components/Heading';
import pages from '../router/pages';

const mapTitle = ({ location }) => ({
  title: get(pages, [location.pathname, 'title']),
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
