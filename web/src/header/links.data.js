import { deleteToken } from '../storage/localStorage';
import { ABOUT, HASHTAGS, PROFILE, LOGIN, REGISTER } from '../router/pages';

export const noAuthLinks = [
  REGISTER,
  LOGIN,
];

export const authLinks = [
  HASHTAGS,
  PROFILE,
  {
    title: 'Log Out',
    path: '/',
    onClick: deleteToken,
  },
];

export const allLinks = [
  ABOUT,
];
