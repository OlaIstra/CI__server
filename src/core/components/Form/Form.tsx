import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';
import { ISettings } from '@shared/interfaces/settings';
import { requests } from '@core/api/requestApi';
import { IEndpoints } from '@shared/enums';
import { validationSchema } from '@pages/SettingsPage/Settings.validation';

import './Form.scss';

const initialValues = {
    id: '',
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    timePeriod: 0,
};

export const CustomForm: React.FC = () => {
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

    return (
        <>
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
                                minutesSettingsPage
                            </div>
                            <div className='form__btns'>
                                <Button
                                    classes={`btn--primary ${!formik.isValid ? 'disabled' : ''}`}
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
        </>
    );
};

export default CustomForm;
