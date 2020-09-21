import React from 'react';
import loadable from '@loadable/component';

const Footer = loadable(() => import('@core/components/Footer/Footer'));

import { Routes } from './Routes';
import '@core/styles/variables.scss';
import './App.scss';

const App: React.FC = () => (
    <>
        <Routes />
        <Footer />
    </>
);

export default App;
