import { Request, Response } from 'express';

import { AppError } from '@shared/error/error';
import { ISettings } from '@shared/interfaces/settings';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { Settings } from './settingsEntity';
import { settingsService } from './settingsServices';
import { gitCommandsService } from '../gitCommands/gitCommandsService';

export const getSettings = async (_: unknown, res: Response<Settings>): Promise<void> => {
    try {
        const result = await settingsService.getSettings();
        res.send(result);
    } catch (err) {
        throw new AppError('Cannot get settings. Bug in settingsController', HttpCode.NOT_FOUND);
    }
};

export const saveSettings = async (
    req: Request<Record<string, unknown>, unknown, ISettings>,
    res: Response<Settings | string | number>,
): Promise<void> => {
    try {
        const result = await settingsService.saveSettings(req.body);
        await gitCommandsService.cloneRepo(req.body.repoName);

        res.sendStatus(result);
    } catch (err) {
        throw new AppError(`Cannot save settings - controller: ${err}`, HttpCode.FORBIDDEN);
    }
};
