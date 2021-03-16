import React, { ChangeEvent, useCallback } from 'react';
import classNames from 'classnames';

import { SettingsParameters } from '@shared/interfaces/settings';

import './Input.scss';

interface IProps {
    placeholder: string;
    classes?: string;
    icon?: string;
    inputValue: string | number;
    property: SettingsParameters;
    handleChange: (value: string, property: SettingsParameters) => void;
}

export const Input: React.FC<IProps> = ({
    placeholder,
    classes,
    icon,
    inputValue,
    property,
    handleChange,
}) => {
    const handleInputValue = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            handleChange(event.currentTarget.value, property);
        },
        [handleChange],
    );
    const handleDelete = useCallback(() => {
        handleChange('', property);
    }, [handleChange]);

    const inputClass = classNames('input', classes);

    return (
        <div className='inputWrapper'>
            <input
                placeholder={placeholder}
                className={inputClass}
                value={inputValue}
                onChange={handleInputValue}
            />
            {icon && <span className={icon} onClick={handleDelete}></span>}
        </div>
    );
};
