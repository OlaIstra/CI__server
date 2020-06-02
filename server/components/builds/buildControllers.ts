import { state } from '../../state';
import { AsyncRequestHandler } from './../../interfaces';
import { AppError } from '../error/error';
import {
    getBuildsService,
    postBuildService,
    getBuildDetailsService,
    getBuildLogsService,
} from './buildServices';

export const getBuilds: AsyncRequestHandler = async (req, res) => {
    try {
        const result = await getBuildsService();

        state.builds = result.data;
        return res.send(result.data);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to get list of builds',
            true
        );
    }
};

export const postBuild: AsyncRequestHandler = async (req, res) => {
    try {
        const result = await postBuildService(req, res);

        return res.send(result);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no posibility to post new build',
            true
        );
    }
};

export const getBuildDetails: AsyncRequestHandler = async (req, res) => {
    try {
        const response = await getBuildDetailsService(req, res);

        return res.send(response);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no such build',
            true
        );
    }
};

export const getBuildLogs: AsyncRequestHandler = async (req, res) => {
    try {
        const result = await getBuildLogsService(req, res);

        return res.send(result);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no logs',
            true
        );
    }
};
