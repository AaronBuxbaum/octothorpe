import {
  HOME, PROFILE, MATCHES, HASHTAGS, LOGIN, REGISTER,
} from './pages';

export const pageRoutes = {
  [HOME]: '/home',
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
