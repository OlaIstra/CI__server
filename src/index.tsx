import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import App from '@pages/App/App';
import { store, StoreContext } from '@core/stores/services';

import './index.scss';

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
