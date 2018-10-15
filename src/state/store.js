import { createStore, combineReducers } from 'redux';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyAIVorViM7RD2lMYxIgYHZ1MqK3zMIG29s",
    authDomain: "octothorpe-me.firebaseapp.com",
    databaseURL: "https://octothorpe-me.firebaseio.com",
    projectId: "octothorpe-me",
    storageBucket: "octothorpe-me.appspot.com",
    messagingSenderId: "306166090904",
};

const reactReduxFirebaseConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const firestoreSettings = {
    timestampsInSnapshots: true,
};
firestore.settings(firestoreSettings);
firebase.functions();

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, reactReduxFirebaseConfig),
    reduxFirestore(firebase)
)(createStore);


const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

export default store;
