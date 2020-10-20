import { Request, Response } from 'express';
import { AppError } from '@shared/error/error';
import { ISettings } from '@shared/interfaces/settings';

import { settingsService } from './settingsServices';
import { Settings } from './settingsEntity';

export const getSettings = async (_: unknown, res: Response<Settings>): Promise<void> => {
    try {
        const result = await settingsService.getSettings();
        res.send(result);
    } catch (err) {
        throw new AppError(err.name, err.httpCode, err.description);
    }
};

export const saveSettings = async (
    req: Request<{}, unknown, ISettings>,
    res: Response<Settings | string | number>,
): Promise<void> => {
    try {
        const result = await settingsService.saveSettings(req.body);
        // await gitCommandsService.cloneRepo(req.body.repoName);
        res.send(result);
    } catch (err) {
        throw new AppError(err.name, err.httpCode, err.description);
    }
};
