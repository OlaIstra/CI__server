import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Job } from './Job';
import { FAKE_JOBS } from '@src/mocks/testData';

describe('Job', () => {
    // eslint-disable-next-line
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    const mockHandleClick = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Job job={FAKE_JOBS[0]} handleClick={mockHandleClick} />);
    });

    afterEach(() => {
        mockHandleClick.mockRestore();
    });

    it('should invoke function OnClick once, if the component was clicked', () => {
        wrapper.find('[data-testid="job"]').simulate('click');

        expect(mockHandleClick.mock.calls).toHaveLength(1);
    });

    it('should pass id of job into the handle function, if the component was clicked', () => {
        const testId = FAKE_JOBS[0].id;
        mockHandleClick.mockImplementation(id => id === testId && `${testId}`);

        wrapper.find('[data-testid="job"]').simulate('click');

        expect(mockHandleClick.mock.results[0].value).toBe(testId);
    });
});
