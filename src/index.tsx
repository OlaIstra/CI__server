import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import App from '@pages/App/App';
import { StoreContext } from '@core/store/helpers/storeContext.ts';
import RootStore from '@core/store/rootStore';

import './index.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;

const initialState = window.__INITIAL_STATE__;

delete window.__INITIAL_STATE__;

const store = new RootStore(initialState);

const app = (
    <StoreContext.Provider value={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreContext.Provider>
);

loadableReady(() => {
    ReactDOM.hydrate(app, document.getElementById('root'));
});
