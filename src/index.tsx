import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import App from '@pages/App/App';
import './index.scss';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

loadableReady(() => {
    ReactDOM.hydrate(app, document.getElementById('root'));
});
