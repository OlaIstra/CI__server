import React, { useContext, useEffect } from 'react';
import loadable from '@loadable/component';
import Store from '@core/stores/store';

const Footer = loadable(() => import('@core/components/Footer/Footer'));

import { Routes } from './Routes';
import '@core/styles/variables.scss';
import './App.scss';

const App: React.FC = () => {
    const store = useContext(Store);

    useEffect(() => {
        store.getSettings();
    }, []);

    return (
        <>
            <Routes />
            <Footer />
        </>
    );
};

export default App;
