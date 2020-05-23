import React from 'react';

import { Button } from '@atoms/Button/Button';
import { Title } from '@atoms/Title/Title';
import './Footer.scss';

export const Footer: React.FC = () => (
    <div className='footer'>
        <div className='fottom__btns'>
            <Button classes='btn--link'>Support</Button>
            <Button classes='btn--link'>Learning</Button>
        </div>
        <Title classes='title--light'>© 2020 Your Name</Title>
    </div>
);
