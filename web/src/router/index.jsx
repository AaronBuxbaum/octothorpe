import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import pages from './pages';
import AuthenticatedRoute from './AuthenticatedRoute';
import PageNotFound from '../pages/PageNotFound';

const buildRoute = (route) => {
  const { component, path } = pages[route];
  return (
    <AuthenticatedRoute
      exact
      path={path}
      component={component}
      key={route}
    />
  );
};

const Router = props => (
  <BrowserRouter {...props}>
    <>
      <Route component={Header} />
      <Switch>
        {Object.keys(pages).map(buildRoute)}
        <Route render={PageNotFound} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
