const AUTH_TOKEN = 'auth-token';

export const saveToken = token => global.localStorage.setItem(AUTH_TOKEN, token);

export const getToken = () => global.localStorage.getItem(AUTH_TOKEN);

export const deleteToken = () => global.localStorage.removeItem(AUTH_TOKEN);
