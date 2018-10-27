import {
  HOME, ABOUT, PROFILE, MATCHES, HASHTAGS, LOGIN, REGISTER,
} from './pages';

export const pageRoutes = {
  [HOME]: '/home',
  [ABOUT]: '/about',
  [PROFILE]: '/profile',
  [MATCHES]: '/matches',
  [HASHTAGS]: '/hashtags',
  [LOGIN]: '/login',
  [REGISTER]: '/register',
};

const routeTo = (pageName) => {
  window.location.assign(pageRoutes[pageName] || pageRoutes[HOME]);
};

export default routeTo;
