import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Header } from '@core/components/Header/Header';
import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';
import { ISettings } from '@shared/interfaces/settings';
import { requests } from '@core/api/requestApi';
import { IEndpoints } from '@shared/enums';

import './SettingsPage.scss';

const initialValues = {
    id: '',
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    timePeriod: 0,
};

export const SettingsPage: React.FC = () => {
    const [settings, setSettings] = useState<ISettings>(initialValues);

    useEffect(() => {
        requests.get(IEndpoints.Settings).then(res => {
            setSettings(res);
        });
    }, []);

    const onSubmit = (settings: ISettings) => {
        requests.post(IEndpoints.Settings, settings);
    };

    const clearAll = () => {
        setSettings(initialValues);
    };

    const validationSchema = Yup.object({
        repoName: Yup.string()
            .matches(/\//, 'Invalid repository name format')
            .required('Required'),
        buildCommand: Yup.string().required('Required'),
        mainBranch: Yup.string().required('Required'),
        timePeriod: Yup.number()
            .required('Required')
            .positive('Must be positive')
            .integer('Must be a number'),
    });

    return (
        <>
            <Header title='School CI server' />
            <div className='settingsPage'>
                <Title classes='title--bold'>Settings</Title>
                <Title classes='title--light'>
                    Configure repository connection and synchronization settings.
                </Title>
                <Formik
                    initialValues={settings}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    validateOnMount
                    enableReinitialize
                >
                    {formik => {
                        return (
                            <Form className='form'>
                                <div className='form__block'>
                                    <Title>GitHub repository</Title>
                                    <div className='form__block__error'>
                                        <ErrorMessage name='repoName' />
                                    </div>
                                    <Field
                                        type='text'
                                        id='repoName'
                                        name='repoName'
                                        placeholder='repo-name'
                                        icon='icon-cross'
                                        className='input'
                                    />
                                </div>
                                <div className='form__block'>
                                    <Title>Main branch name</Title>
                                    <div className='form__block__error'>
                                        <ErrorMessage name='mainBranch' />
                                    </div>
                                    <Field
                                        type='text'
                                        id='mainBranch'
                                        name='mainBranch'
                                        placeholder='branch name'
                                        icon='icon-cross'
                                        className='input'
                                    />
                                </div>
                                <div className='form__block'>
                                    <Title>Build command</Title>
                                    <div className='form__block__error'>
                                        <ErrorMessage name='buildCommand' />
                                    </div>
                                    <Field
                                        type='text'
                                        id='buildCommand'
                                        name='buildCommand'
                                        placeholder='npm run start'
                                        icon='icon-cross'
                                        className='input'
                                    />
                                </div>
                                <div className='form__info'>
                                    Synchronize every
                                    <div>
                                        <div className='form__block__error'>
                                            <ErrorMessage name='timePeriod' />
                                        </div>
                                        <Field
                                            type='text'
                                            id='timePeriod'
                                            name='timePeriod'
                                            placeholder='enter'
                                            classes='input input--block'
                                        />
                                    </div>
                                    minutes
                                </div>
                                <div className='form__btns'>
                                    <Button
                                        classes={`btn--primary ${
                                            !formik.isValid ? 'disabled' : ''
                                        }`}
                                        type='submit'
                                    >
                                        Save
                                    </Button>
                                    <Button handleClick={clearAll}>Cancel</Button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
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
