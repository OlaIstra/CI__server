import React, { MouseEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Input } from '@atoms/Input/Input';
import { Button } from '@atoms/Button/Button';
import { ISettings, SettingsUnion } from '@shared/interfaces/settings';
import storeSettings from '@core/stores/storeSettings';

import './SettingsPage.scss';

export const SettingsPage: React.FC = () => {
    const store = useContext(storeSettings);
    const [settings, setSettings] = useState<ISettings>({
        id: '123',
        repoName: '',
        buildCommand: '',
        mainBranch: '',
        timePeriod: 0,
    });

    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const saveSettings = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        store.saveSettings(settings);
    };

    const handleChange = (value: string, property: SettingsUnion) => {
        setSettings((prev: ISettings) => ({
            ...prev,
            [property]: value,
        }));

        Object.values(settings).includes('') ? setIsDisabled(true) : setIsDisabled(false);
    };

    const clearAll = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setSettings({
            id: '123',
            repoName: '',
            buildCommand: '',
            mainBranch: '',
            timePeriod: 0,
        });
        setIsDisabled(true);
    };

    return (
        <>
            <Header title='School CI server' />
            <div className='settingsPage'>
                <Title classes='title--bold'>Settings</Title>
                <Title classes='title--light'>
                    Configure repository connection and synchronization settings.
                </Title>
                <form action='' className='form'>
                    <div className='form__block'>
                        <Title>GitHub repository</Title>
                        <Input
                            placeholder='repo-name'
                            icon='icon-cross'
                            inputValue={settings.repoName}
                            handleChange={handleChange}
                            property='repoName'
                        />
                    </div>
                    <div className='form__block'>
                        <Title>Main branch name</Title>
                        <Input
                            placeholder='branch name'
                            icon='icon-cross'
                            inputValue={settings.mainBranch}
                            handleChange={handleChange}
                            property='mainBranch'
                        />
                    </div>
                    <div className='form__block'>
                        <Title>Build command</Title>
                        <Input
                            placeholder='npm run start'
                            icon='icon-cross'
                            inputValue={settings.buildCommand}
                            handleChange={handleChange}
                            property='buildCommand'
                        />
                    </div>
                    <div className='form__info'>
                        Synchronize every
                        <Input
                            placeholder='10'
                            classes='input--block'
                            inputValue={settings.timePeriod}
                            handleChange={handleChange}
                            property='timePeriod'
                        />
                        minutes
                    </div>
                    <div className='form__btns'>
                        <Button
                            classes={`btn--primary ${isDisabled ? 'disabled' : ''}`}
                            handleClick={saveSettings}
                        >
                            Save
                        </Button>
                        <Button handleClick={clearAll}>Cancel</Button>
                    </div>
                </form>
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
