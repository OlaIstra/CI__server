import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';

import * as useStoresHooks from '../../core/store/helpers/useStores';
import { Routes } from './Routes';
import { FAKE_STORE } from '@src/mocks/testData';

const mockUseStore = jest.spyOn(useStoresHooks, 'useStores');

beforeEach(() => {
    mockUseStore.mockReturnValue(FAKE_STORE);
});

describe('Routes', () => {
    it('should redirect to Configuration page, if the "/" path was provided', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/']}>
                <Routes />
            </MemoryRouter>,
        );

        expect(wrapper.find(Router).prop('history').location.pathname).toBe('/');
    });

    it('should redirect to Settings page, if the ./settings path was provided', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/settings']}>
                <Routes />
            </MemoryRouter>,
        );

        expect(wrapper.find(Router).prop('history').location.pathname).toBe('/settings');
    });

    it('should redirect to Jobs page, if the ./jobs path was provided', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/jobs']}>
                <Routes />
            </MemoryRouter>,
        );

        expect(wrapper.find(Router).prop('history').location.pathname).toBe('/jobs');
    });

    it('should redirect to SingleJob page, if the ./jobs/:id path was provided', () => {
        jest.mock('react-router-dom', () => ({
            useParams: jest.fn().mockReturnValue({ id: '123' }),
        }));
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/jobs/123']}>
                <Routes />
            </MemoryRouter>,
        );

        expect(wrapper.find(Router).prop('history').location.pathname).toBe('/jobs/123');
    });

    it('should redirect to NotFound page, if the any (not mentoned) path was provided', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/anypath']}>
                <Routes />
            </MemoryRouter>,
        );

        expect(wrapper.find(Router).prop('history').location.pathname).toBe('/anypath');
    });
});
