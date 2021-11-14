import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Input, IProps } from './Input';
import { SettingsParameters } from '@shared/interfaces/settings';
import { setTestId } from '@src/utils';

const onChangeMock = jest.fn();

afterEach(() => {
    onChangeMock.mockReset();
});

type Wrapper = ShallowWrapper<
    unknown,
    Readonly<Record<string, unknown>>,
    React.Component<Record<string, unknown>, Record<string, unknown>, unknown>
>;

describe('Input', () => {
    it('should render icon, if it is provided', () => {
        const InputProps: IProps = {
            placeholder: 'test',
            icon: 'icon',
            inputValue: 'test',
            property: 'repoName' as SettingsParameters,
            handleChange: onChangeMock,
        };
        const wrapper: Wrapper = shallow(<Input {...InputProps} />);

        expect(wrapper.find(setTestId('icon'))).toHaveLength(1);
    });

    it('should change input value, if it was modified', () => {
        const InputProps: IProps = {
            placeholder: 'test',
            icon: 'icon',
            inputValue: 'test',
            property: 'repoName' as SettingsParameters,
            handleChange: onChangeMock,
        };
        const wrapper: Wrapper = shallow(<Input {...InputProps} />);
        const event = {
            currentTarget: { value: 'new-test' },
        } as React.ChangeEvent<HTMLInputElement>;

        wrapper.find(setTestId('input')).simulate('change', event);

        expect(onChangeMock).toHaveBeenCalledWith('new-test', InputProps.property);
    });

    it('should clear input value, if the delete icon was clicked', () => {
        const InputProps: IProps = {
            placeholder: 'test',
            icon: 'icon',
            inputValue: 'test',
            property: 'repoName' as SettingsParameters,
            handleChange: onChangeMock,
        };
        const wrapper: Wrapper = shallow(<Input {...InputProps} />);
        const event = {
            currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;

        wrapper.find(setTestId('icon')).simulate('click', event);

        expect(onChangeMock).toHaveBeenCalledWith('', InputProps.property);
    });
});
