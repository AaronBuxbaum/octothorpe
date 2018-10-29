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
  const page = pageRoutes[pageName] || pageRoutes[HOME];
  window.location.assign(page);
};

export default routeTo;
