import { Response, Request } from 'express';

import { HttpCode } from '@shared/error/httpStatusCodes';
import { AppError } from '@shared/error/error';
import { gitCommandsService } from '@server/components/gitCommands/gitCommandsService';
import { settingsService } from '@server/components/settings/settingsServices';
import { buildService } from './buildServices';
import { Build } from './buildsEntity';
import { IBuildCommit } from './interfaces';

export const getBuilds = async (_: unknown, res: Response<Build[]>): Promise<void> => {
    try {
        const builds = await buildService.getBuilds();
        res.send(builds);
    } catch (err) {
        throw new AppError('Cannot get builds', HttpCode.NOT_FOUND);
    }
};

export const saveBuild = async (
    req: Request<{ commitHash: string }>,
    res: Response<IBuildCommit>,
): Promise<void> => {
    const { commitHash } = req.body;

    const settings = await settingsService.getSettings();

    const branchName = settings?.mainBranch;

    const buildInfo = await gitCommandsService.getCommitByHash(commitHash, branchName);
    try {
        const result = await buildService.saveBuild(buildInfo);
        res.send(result);
    } catch (err) {
        throw new AppError('Cannot save build', HttpCode.FORBIDDEN);
    }
};

export const getBuildDetails = async (
    req: Request<{ id: string }>,
    res: Response<Build>,
): Promise<void> => {
    try {
        const response = await buildService.getBuildDetails(req.params.id);
        res.send(response);
    } catch (err) {
        throw new AppError('Cannot get build details', HttpCode.NOT_FOUND);
    }
};

export const getBuildLogs = async (
    req: Request<{ id: string }>,
    res: Response<Build['buildLogs']>,
): Promise<void> => {
    try {
        const result = await buildService.getBuildDetails(req.params.id);
        res.send(result?.buildLogs);
    } catch (err) {
        throw new AppError('Cannot get build logs', HttpCode.NOT_FOUND);
    }
};

export const deleteBuilds = async (_: unknown, res: Response<string>): Promise<void> => {
    try {
        await buildService.deleteBuilds();
        res.send('success');
    } catch (err) {
        throw new AppError('Cannot delete builds', HttpCode.FORBIDDEN);
    }
};
