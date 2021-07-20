import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { render, fireEvent, waitForElementToBeRemoved, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CustomForm } from './Form';
import { FAIL_SETTINGS, FAKE_SETTINGS } from '@src/mocks/testData';

describe('CustomForm', () => {
    describe('CustomForm reacts on change event', () => {
        // eslint-disable-next-line
        let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

        const testFunc = (name: string, value: string) => {
            const input = wrapper.find(`input[data-testid="${name}"]`);
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

        beforeEach(() => {
            wrapper = mount(<CustomForm initialSettings={FAKE_SETTINGS} />);
        });

        it('should update repoName field on change', () => {
            testFunc('repoName', 'test/test');
        });

        it('should update mainBranch field on change', () => {
            testFunc('mainBranch', 'test');
        });

        it('should update buildCommand field on change', () => {
            testFunc('buildCommand', 'test');
        });

        it('should update timePeriod field on change', () => {
            testFunc('timePeriod', '10');
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

        beforeEach(() => {
            render(<CustomForm initialSettings={FAIL_SETTINGS} />);
        });

        it('should have Required error given repoName field is touched and error exists on form', async () => {
            await testOnRequireFunc('repoName', 'Test/Test');
        });

        it('should have Required error given mainBranch field is touched and error exists on form', async () => {
            await testOnRequireFunc('mainBranch', 'test');
        });

        it('should have Required error given buildCommand field is touched and error exists on form', async () => {
            await testOnRequireFunc('buildCommand', 'test');
        });

        it('should have Required error given timePeriod field is touched and error exists on form', async () => {
            const field = await screen.findByTestId('timePeriod');

            userEvent.clear(field);
            userEvent.type(field, '');
            fireEvent.blur(field);

            await screen.findByTestId('timePeriodError');

            userEvent.type(field, '10');
            fireEvent.blur(field);

            await waitForElementToBeRemoved(() => screen.queryByText('Required'));
        });
    });

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
});
