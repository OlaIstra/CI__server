import React from 'react';

import { Title } from '@atoms/Title/Title';
import { Button } from '@atoms/Button/Button';

import './Modal.scss';

export const Modal: React.FC = () => {
    return (
        <div className='modal'>
            <Title classes='title--huge'>New build</Title>
            <Title>Enter the commit hash that you want to build</Title>
            <form action='' className='form'>
                <div className='form__btns'>
                    <Button classes='btn--primary'>Run build</Button>
                    <Button>Cancel</Button>
                </div>
            </form>
        </div>
    );
};
