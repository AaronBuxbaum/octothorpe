import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Matches from '../pages/Matches/Matches';
import Hashtags from '../pages/Hashtags/Hashtags';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import {
  HOME, PROFILE, MATCHES, HASHTAGS, LOGIN, REGISTER,
} from './pages';
import { pageRoutes } from './routeTo';
import AuthenticatedRoutes from './AuthenticatedRoutes';

const componentToRoute = {
  [HOME]: Home,
  [PROFILE]: Profile,
  [MATCHES]: Matches,
  [HASHTAGS]: Hashtags,
  [LOGIN]: Login,
  [REGISTER]: Register,
};

const Router = props => (
  <BrowserRouter {...props}>
    <div>
      <Route component={Header} />
      <Route exact path="/" component={Home} />
      {Object.keys(componentToRoute).map(route => (
        <Route
          path={pageRoutes[route]}
          component={componentToRoute[route]}
          key={route}
        />
      ))}
      <AuthenticatedRoutes />
    </div>
  </BrowserRouter>
);

export default Router;
