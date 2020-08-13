import { Request, Response } from 'express';

import { AppError } from '@server/components/error/error';
import { settingsService } from './settingsServices';
import { gitCommandsService } from './../gitCommands/gitCommandsService';
import { ISettings } from './interfaces';
import { Settings } from './settingsEntity';

export const getSettings = async (
    _: unknown,
    res: Response<Settings>
): Promise<void> => {
    try {
        const result = await settingsService.getSettings();
        res.send(result);
    } catch (err) {
        throw new AppError(err.name, err.httpCode, err.description);
    }
};

export const saveSettings = async (
    req: Request<{}, unknown, ISettings>,
    res: Response<Settings | string>
): Promise<void> => {
    try {
        const result = await settingsService.saveSettings(req.body);

        const isLocalRepo = gitCommandsService.findLocalRepo();

        if (isLocalRepo) {
            gitCommandsService.deleteLocalRepo();
        }

        await gitCommandsService.cloneRepo('OlaIstra', req.body.repoName);

        res.send(result);
    } catch (err) {
        throw new AppError(err.name, err.httpCode, err.description);
    }
};
