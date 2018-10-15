import React from 'react';
import ReactDOM from 'react-dom';
import GrommetApp from 'grommet/components/App';
import StateProvider from './state/Provider';
import 'grommet/grommet.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './router';

ReactDOM.render(
    <GrommetApp>
        <StateProvider>
            <Router />
        </StateProvider>
    </GrommetApp>,
    document.getElementById('root')
);

serviceWorker.unregister();
