import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';
import './ConfigurationPage.scss';

export const ConfigurationPage: React.FC = () => (
    <>
        <Header title='School CI server'>
            <Link to='/settings'>
                <Button icon='icon-settings'>Settings</Button>
            </Link>
        </Header>
        <div className='configPage'>
            <div className='configPage_logo' />
            <Title>
                Configure repository connection and synchronization settings
            </Title>
            <Link to='/settings'>
                <Button classes='btn--primary'>Open settings</Button>
            </Link>
        </div>
    </>
);
