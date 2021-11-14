import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';

import './ConfigurationPage.scss';

const ConfigurationPage: React.FC = () => (
    <>
        <Header />
        <div className='configPage'>
            <div className='configPage__logo' />
            <h1>
                KIRKL <span>CI</span>
            </h1>
            <Link className='configPage__link' to='/settings' data-testid='settings-link'>
                <Button classes='btn--base' data-testid='button'>
                    Open settings
                </Button>
            </Link>
            <Title data-testid='title'>
                Configure repository connection and synchronization settings
            </Title>
        </div>
    </>
);

export default ConfigurationPage;
