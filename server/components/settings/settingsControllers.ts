import { execSync } from 'child_process';
import path from 'path';

import { AsyncRequestHandler } from './../../interfaces';
import { AppError } from '../error/error';
import { getSettingsService, postSettingsService } from './settingsServices';

export const getSettings: AsyncRequestHandler = async (req, res) => {
    try {
        const result = await getSettingsService();

        return res.send(result);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to get settings',
            true
        );
    }
};

export const postSettings: AsyncRequestHandler = async (req, res) => {
    try {
        const result = await postSettingsService(req, res);

        try {
            execSync(`git clone ${result.repoName}`, {
                stdio: [0, 1, 2],
                cwd: path.resolve(__dirname, '../'),
            });
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'Some problem to clone repo',
                true
            );
        }
        return res.send(`New settings: ${result}`);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to post new settings',
            true
        );
    }
};
