import React from 'react';
import { Footer } from '@core/components/Footer/Footer';

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
