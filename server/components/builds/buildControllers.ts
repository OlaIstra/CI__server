//import { state } from '@server/state';
import { AsyncRequestHandler } from '@server/interfaces';
import { AppError } from '@server/components/error/error';
import { buildService } from './buildServices';
import { pool } from '@server/db';

export const getBuilds: AsyncRequestHandler = async (req, res) => {
    try {
        return pool.query(
            'SELECT * FROM builds',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (qErr: unknown, qRes: any) => {
                res.json(qRes.rows);
            }
        );
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to get list of builds'
        );
    }
};

export const postBuild: AsyncRequestHandler = async (req, res) => {
    try {
        const result = await buildService.buildRequest(req, res);

        return res.send(result);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no posibility to post new build'
        );
    }
};

export const getBuildDetails: AsyncRequestHandler = async (req, res) => {
    try {
        const response = await buildService.getBuildDetails(req, res);

        return res.send(response);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no such build'
        );
    }
};

export const getBuildLogs: AsyncRequestHandler = async (req, res) => {
    try {
        const result = await buildService.getBuildLogs(req, res);

        return res.send(result);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no logs'
        );
    }
};
