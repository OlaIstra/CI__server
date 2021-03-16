import React, { useCallback, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { observer } from 'mobx-react-lite';

import { ISettings } from '@shared/interfaces/settings';
import { EndPoints } from '@shared/enums';
import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';
import { requests } from '@core/api/requestApi';
import { validationSchema } from '@pages/SettingsPage/Settings.validation';

import './Form.scss';

interface Props {
    initialSettings: ISettings;
}

const initialValues = {
    id: '',
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    timePeriod: 0,
};

export const CustomForm: React.FC<Props> = observer(({ initialSettings }) => {
    const [settings, setSettings] = useState(initialSettings);

    const onSubmit = useCallback((settings: ISettings) => {
        requests.post(EndPoints.Settings, settings);
    }, []);

    const clearAll = useCallback(() => {
        setSettings(initialValues);
    }, [setSettings]);

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
                                        classes='input input__block'
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
});
