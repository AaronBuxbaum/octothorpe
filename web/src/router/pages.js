import { mapKeys } from 'lodash';
import Home from '../pages/Home';
import About from '../pages/About';
import Profile from '../pages/Profile';
import Matches from '../pages/Matches';
import Hashtags from '../pages/Hashtags';
import Login from '../pages/Login';

export const HOME = {
  path: '/',
  title: 'Home',
  component: Home,
};

export const ABOUT = {
  path: '/about',
  title: 'About',
  component: About,
};

export const PROFILE = {
  path: '/profile',
  title: 'Profile',
  component: Profile,
  requiresAuth: true,
};

export const MATCHES = {
  path: '/matches',
  title: 'Matches',
  component: Matches,
  requiresAuth: true,
};

export const HASHTAGS = {
  path: '/hashtags',
  title: 'Hashtags',
  component: Hashtags,
  requiresAuth: true,
};

export const LOGIN = {
  path: '/login',
  title: 'Login',
  component: Login,
};

export const REGISTER = {
  path: '/register',
  title: 'Register',
  component: Login,
};

const pages = {
  HOME,
  ABOUT,
  PROFILE,
  MATCHES,
  HASHTAGS,
  LOGIN,
  REGISTER,
};

export default mapKeys(pages, ({ path }) => path);
