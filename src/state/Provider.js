import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const StateProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default StateProvider;
