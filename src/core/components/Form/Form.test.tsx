import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { render, fireEvent, waitForElementToBeRemoved, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CustomForm } from './Form';
import { FAIL_SETTINGS, FAKE_SETTINGS } from '@src/mocks/testData';
import { setTestId } from '@src/utils';

describe('CustomForm', () => {
    describe('CustomForm displays validation errors', () => {
        beforeEach(() => {
            render(<CustomForm initialSettings={FAIL_SETTINGS} />);
        });

        it('should have validation error given repoName field, if field is touched and value is not validated', async () => {
            const repoName = await screen.findByTestId('repoName');

            userEvent.type(repoName, 'test');
            fireEvent.blur(repoName);

            await screen.findByText('Invalid repository name format');

            userEvent.clear(repoName);
            userEvent.type(repoName, 'Test/Test');

            await waitForElementToBeRemoved(() =>
                screen.queryByText('Invalid repository name format'),
            );
        });

        it('should have validation error given timePeriod field, if field is touched and timePeriod is not a number or less than 0 ', async () => {
            const timePeriod = await screen.findByTestId('timePeriod');

            userEvent.type(timePeriod, 'test');
            fireEvent.blur(timePeriod);

            await screen.findByText('timePeriod must be a `number` type', { exact: false });

            userEvent.clear(timePeriod);
            userEvent.type(timePeriod, '-100');

            await screen.findByText('Must be positive');

            userEvent.clear(timePeriod);
            userEvent.type(timePeriod, '100');

            await waitForElementToBeRemoved(() => screen.queryByText('Must be positive'));
        });
    });

    describe('CustomForm reacts on change event', () => {
        let wrapper: ReactWrapper;

        const testFunc = (name: string, value: string) => {
            const inputTestId = setTestId(name);
            const input = wrapper.find(`input${inputTestId}`);
            input.simulate('change', {
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                persist: () => {},
                target: {
                    name: name,
                    value: value,
                },
            });

            expect(input.html()).toMatch(value);
        };

        const cases = [
            ['repoName', 'test/test'],
            ['mainBranch', 'test'],
            ['buildCommand', 'test'],
            ['timePeriod', '10'],
        ];

        beforeEach(() => {
            wrapper = mount(<CustomForm initialSettings={FAKE_SETTINGS} />);
        });

        test.each(cases)('should update %p field on change', (field, value) => {
            testFunc(field, value);
        });
    });

    describe('CustomForm displays "Required" errors', () => {
        const testOnRequireFunc = async (testId: string, value: string) => {
            const field = await screen.findByTestId(testId);

            fireEvent.blur(field);

            await screen.findByTestId(`${testId}Error`);

            userEvent.type(field, value);
            fireEvent.blur(field);

            await waitForElementToBeRemoved(() => screen.queryByText('Required'));
        };

        const cases = [
            ['repoName', 'Test/Test'],
            ['mainBranch', 'test'],
            ['buildCommand', 'test'],
            ['timePeriod', 'test'],
        ];

        beforeEach(() => {
            render(<CustomForm initialSettings={FAIL_SETTINGS} />);
        });

        test.each(cases)(
            'should have Required error given %p field is touched and error exists on form',
            (field, value) => {
                testOnRequireFunc(field, value);
            },
        );
    });
});
