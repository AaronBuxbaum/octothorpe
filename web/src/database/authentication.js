import firebase from 'firebase';

const authenticator = firebase.auth();

export const registerAccount = ({ username, password }) => authenticator.createUserWithEmailAndPassword(username, password);

export const logInToAccount = ({ username, password }) => authenticator.signInWithEmailAndPassword(username, password);
