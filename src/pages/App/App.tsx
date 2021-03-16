import React from 'react';
import { observer } from 'mobx-react-lite';
import loadable from '@loadable/component';

import { Routes } from './Routes';

import '@core/styles/variables.scss';
import './App.scss';

const Footer = loadable(() => import('@core/components/Footer/Footer'));

const App: React.FC = () => {
    return (
        <>
            <Routes />
            <Footer />
        </>
    );
};

export default observer(App);
