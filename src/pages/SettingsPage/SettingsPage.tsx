import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Input } from '@atoms/Input/Input';
import { Button } from '@atoms/Button/Button';
import './SettingsPage.scss';

export const SettingsPage: React.FC = () => (
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
                    <Input placeholder='user-name/repo-name' />
                </div>
                <div className='form__block'>
                    <Title>Build command</Title>
                    <Input placeholder='user-name/repo-name' icon='icon-cross' />
                </div>
                <div className='form__block'>
                    <Title>Build command</Title>
                    <Input placeholder='master' icon='icon-cross' />
                </div>
                <div className='form__info'>
                    Synchronize every
                    <Input placeholder='10' classes='input--block' />
                    minutes
                </div>
                <div className='form__btns'>
                    <Button classes='btn--primary'>Save</Button>
                    <Button>Cancel</Button>
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

export default SettingsPage;
