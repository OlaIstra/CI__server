import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Input } from './Input';
import { SettingsParameters } from '@shared/interfaces/settings';

const onChangeMock = jest.fn();

const InputProps = {
    placeholder: 'test',
    icon: 'icon',
    inputValue: 'test',
    property: 'repoName' as SettingsParameters,
    handleChange: onChangeMock,
};

afterEach(() => {
    onChangeMock.mockReset();
});

describe('Input', () => {
    // eslint-disable-next-line
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        wrapper = shallow(<Input {...InputProps} />);
    });

    it('should render icon, if it is provided', () => {
        expect(wrapper.find('[data-testid="icon"]')).toHaveLength(1);
    });

    it('should change input value, if it was modified', () => {
        const event = {
            currentTarget: { value: 'new-test' },
        } as React.ChangeEvent<HTMLInputElement>;

        wrapper.find('[data-testid="input"]').simulate('change', event);

        expect(onChangeMock).toHaveBeenCalledWith('new-test', InputProps.property);
    });

    it('should clear input value, if the delete icon was clicked', () => {
        const event = {
            currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;

        wrapper.find('[data-testid="icon"]').simulate('click', event);

        expect(onChangeMock).toHaveBeenCalledWith('', InputProps.property);
    });
});
