import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Job } from './Job';
import { IJob } from '@shared/interfaces/jobs';
import { setTestId } from '@src/utils';

const FAKE_JOBS: IJob[] = [
    {
        id: '1',
        commitMessage: 'test',
        commitHash: 'test',
        branchName: 'test',
        authorName: 'test',
        status: 'test',
    },
    {
        id: '12',
        commitMessage: 'test',
        commitHash: 'test',
        branchName: 'test',
        authorName: 'test',
        status: 'test',
    },
];

describe('Job', () => {
    let wrapper: ShallowWrapper;
    const mockHandleClick = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Job job={FAKE_JOBS[0]} handleClick={mockHandleClick} />);
    });

    afterEach(() => {
        mockHandleClick.mockRestore();
    });

    it('should invoke function OnClick once, if the component was clicked', () => {
        wrapper.find(`${setTestId('job')}`).simulate('click');

        expect(mockHandleClick.mock.calls).toHaveLength(1);
    });

    it('should pass id of job into the handle function, if the component was clicked', () => {
        const testId = FAKE_JOBS[0].id;
        mockHandleClick.mockImplementation(id => id === testId && `${testId}`);

        wrapper.find(`${setTestId('job')}`).simulate('click');

        expect(mockHandleClick.mock.results[0].value).toBe(testId);
    });
});
