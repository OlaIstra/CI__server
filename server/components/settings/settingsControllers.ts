import { Request, Response } from 'express';

import { AppError } from '@server/components/error/error';
import { settingsService } from './settingsServices';
import { ISettings } from './interfaces';
import { Settings } from './settingsEntity';

export const getSettings = async (
    _: unknown,
    res: Response<Settings>
): Promise<void> => {
    try {
        const result = await settingsService.getSettings();
        res.send(result);
    } catch (qErr) {
        throw new AppError(
            qErr.response.statusText,
            qErr.response.status,
            'Some problem to get settings'
        );
    }
};

export const saveSettings = async (
    req: Request<{}, unknown, ISettings>,
    res: Response<Settings>
): Promise<void> => {
    try {
        const result = await settingsService.saveSettings(req.body);

        //

        try {
            // ToDo add commands to clone repo from gitService (from Kirill)
            // execSync(`git clone ${result.repoName}`, {
            //     stdio: [0, 1, 2],
            //     cwd: path.resolve(__dirname, '../'),
            // });
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'Some problem to clone repo'
            );
        }
        res.send(result);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to post new settings'
        );
    }
};
