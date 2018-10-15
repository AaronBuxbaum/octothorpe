import firebase from 'firebase';

const authenticator = firebase.auth();

export const registerAccount = ({ username, password }) => {
    return authenticator.createUserWithEmailAndPassword(username, password);
};

export const logInToAccount = ({ username, password }) => {
    return authenticator.signInWithEmailAndPassword(username, password);
};
