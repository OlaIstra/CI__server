import { Request, Response } from 'express';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { Settings } from './settingsEntity';
import { settingsService } from './settingsServices';
import { RepositoryCommandsService } from '../repositoryCommandsService/RepositoryCommandsService';

const RepositoryCommandsInstance = new RepositoryCommandsService();

export const getSettings = async (_: unknown, res: Response<Settings>): Promise<void> => {
    try {
        const result = await settingsService.getSettings();
        res.send(result);
    } catch (err) {
        throw new AppError('Cannot get settings. Bug in settingsController', HttpCode.NOT_FOUND);
    }
};

export const saveSettings = async (
    req: Request,
    res: Response<Settings | string | number>,
): Promise<void> => {
    try {
        const result = await settingsService.saveSettings(req.body);
        await RepositoryCommandsInstance.cloneRepo(req.body.repoName);

        res.sendStatus(result);
    } catch (err) {
        throw new AppError(`Cannot save settings - controller: ${err}`, HttpCode.FORBIDDEN);
    }
};
