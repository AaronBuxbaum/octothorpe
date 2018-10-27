import { deleteToken } from '../storage/localStorage';

export const noAuthLinks = [
  {
    label: 'Register',
    href: '/register',
  },
  {
    label: 'Log In',
    href: '/login',
  },
];

export const authLinks = [
  {
    label: 'Hashtags',
    href: '/hashtags',
  },
  {
    label: 'Profile',
    href: '/profile',
  },
  {
    label: 'Log Out',
    href: '/',
    onClick: deleteToken,
  },
];

export const allLinks = [
  {
    label: 'About',
    href: '/about',
  },
];
