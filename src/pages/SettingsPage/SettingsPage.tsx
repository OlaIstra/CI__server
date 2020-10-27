import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';
import { CustomForm } from '@core/components/Form/Form';

import './SettingsPage.scss';

const SettingsPage: React.FC = () => {
    return (
        <>
            <Header title='School CI server' />
            <div className='settingsPage'>
                <Title classes='title--bold'>Settings</Title>
                <Title classes='title--light'>
                    Configure repository connection and synchronization settings.
                </Title>
                <CustomForm />
                <br />
                temporary to show history page
                <br />
                <Link to='/history'>
                    <Button icon='icon-play' classes='btn--primary'>
                        to history page
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default SettingsPage;
