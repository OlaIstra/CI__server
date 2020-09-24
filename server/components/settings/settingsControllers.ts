import { Request, Response } from 'express';
import { AppError } from '@server/components/error/error';
import { gitCommandsService } from '@server/components/gitCommands/gitCommandsService';

import { settingsService } from './settingsServices';
import { ISettings } from './interfaces';
import { Settings } from './settingsEntity';

export const getSettings = async (_: unknown, res: Response<Settings>): Promise<void> => {
    try {
        const result = await settingsService.getSettings();
        res.send(result);
    } catch (err) {
        console.log('no result');
        console.log(err);
        throw new AppError(err.name, err.httpCode, err.description);
    }
};

export const saveSettings = async (
    req: Request<{}, unknown, ISettings>,
    res: Response<Settings | string | number>,
): Promise<void> => {
    try {
        const result = await settingsService.saveSettings(req.body);
        await gitCommandsService.cloneRepo(req.body.userName, req.body.repoName);
        res.send(result);
    } catch (err) {
        throw new AppError(err.name, err.httpCode, err.description);
    }
};
