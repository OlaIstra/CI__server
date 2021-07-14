import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';
import { CustomForm } from '@core/components/Form/Form';
import { useStores } from '@core/store/helpers/useStores';

import './SettingsPage.scss';

const SettingsPage: React.FC = () => {
    const { settingsStore } = useStores();
    const initialSettings = settingsStore.settings;

    return (
        <>
            <Header title='School CI server' />
            <div className='settingsPage'>
                <Title classes='title--bold'>Settings</Title>
                <Title classes='title--light'>
                    Configure repository connection and synchronization settings.
                </Title>
                <CustomForm initialSettings={initialSettings} />
                <br />
                temporary to show jobs page
                <br />
                <Link to='/jobs'>
                    <Button icon='icon-play' classes='btn--primary'>
                        to jobs page
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default observer(SettingsPage);
