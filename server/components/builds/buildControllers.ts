import { Response, Request } from 'express';

import { AppError } from '@server/components/error/error';
import { buildService } from './buildServices';
import { Build } from './buildsEntity';
import { IBuild } from './interfaces';

export const getBuilds = async (
    _: unknown,
    res: Response<Build[]>
): Promise<void> => {
    try {
        const builds = await buildService.getBuilds();
        res.send(builds);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to get list of builds'
        );
    }
};

export const saveBuild = async (
    req: Request<{ id: string }, unknown, IBuild>,
    res: Response<Build>
): Promise<void> => {
    try {
        const result = await buildService.saveBuild(req.body);
        // todo validation for id после добавления gitService
        res.send(result);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no posibility to post new build'
        );
    }
};

export const getBuildDetails = async (
    req: Request<{ id: string }>,
    res: Response<Build>
): Promise<void> => {
    try {
        const response = await buildService.getBuildDetails(req.params.id);

        res.send(response);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no such build'
        );
    }
};

export const getBuildLogs = async (
    req: Request<{ id: string }>,
    res: Response<Build['buildLogs']>
): Promise<void> => {
    try {
        const result = await buildService.getBuildDetails(req.params.id);

        res.send(result?.buildLogs);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no logs'
        );
    }
};
