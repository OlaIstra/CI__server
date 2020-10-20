import React, { MouseEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Input } from '@atoms/Input/Input';
import { Button } from '@atoms/Button/Button';
import { ISettings, SettingsUnion } from '@shared/interfaces/settings';
import { requests } from '@core/api/requestApi';
import { IEndpoints } from '@shared/enums';

import './SettingsPage.scss';

const initialSettings = {
    id: '',
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    timePeriod: 10,
};

export const SettingsPage: React.FC = () => {
    const [settings, setSettings] = useState<ISettings>(initialSettings);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    useEffect(() => {
        requests.get(IEndpoints.Settings).then(res => {
            setSettings(res);
            setIsDisabled(false);
        });
    }, []);

    const saveSettings = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        requests.post(IEndpoints.Settings, settings);
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
        setSettings(initialSettings);
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
