import { Request, Response } from 'express';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { Settings } from './settingsEntity';
import { settingsService } from './settingsServices';
import { RepositoryCommandsService } from '../repositoryCommandsService/RepositoryCommandsService';
import { ErrorMessage } from '@shared/error/errorMessage';

const repositoryCommandsService = new RepositoryCommandsService();

export const getSettings = async (_: unknown, res: Response<Settings>): Promise<void> => {
    try {
        const result = await settingsService.getSettings();
        res.send(result);
    } catch (error) {
        throw new AppError(
            `${ErrorMessage.FAILED_CONTROLLER_GET_SETTINGS} ${error}`,
            HttpCode.NOT_FOUND,
        );
    }
};

export const saveSettings = async (
    req: Request,
    res: Response<Settings | string | number>,
): Promise<void> => {
    try {
        const result = await settingsService.saveSettings(req.body);
        await repositoryCommandsService.cloneRepo(req.body.repoName);

        res.sendStatus(result);
    } catch (error) {
        throw new AppError(
            `${ErrorMessage.FAILED_CONTROLLER_SAVE_SETTINGS} ${error}`,
            HttpCode.BAD_REQUEST,
        );
    }
};
