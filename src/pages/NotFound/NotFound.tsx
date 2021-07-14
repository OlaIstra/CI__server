import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';

import './NotFound.scss';

const NotFound: React.FC = () => (
    <>
        <Header />
        <div className='configPage'>
            <div className='configPage__logo' />
            <h1>
                KIRKL <span>CI</span>
            </h1>
            <Link className='configPage__link' to='/'>
                <Button classes='btn--base'>Go to main page</Button>
            </Link>
            <Title>404 - Page not found</Title>
        </div>
    </>
);

export default NotFound;
