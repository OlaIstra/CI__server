import React from 'react';

import { Routes } from './Routes';
import { Footer } from '@core/components/Footer/Footer';

import './App.scss';

const App: React.FC = () => (
    <>
        <Routes />
        <Footer />
    </>
);

export default App;
