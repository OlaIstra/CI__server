import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { configure } from 'mobx';

import App from '@pages/App/App';
import { StoreContext } from '@core/store/helpers/storeContext.ts';
import RootStore from '@core/store/rootStore';

import './index.scss';

configure({
    enforceActions: 'always',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true,
});

const store = new RootStore(window.__INITIAL_STATE__);

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
