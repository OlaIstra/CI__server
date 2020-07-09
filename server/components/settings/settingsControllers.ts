import { execSync } from 'child_process';
import path from 'path';

import { AsyncRequestHandler } from '@server/interfaces';
import { AppError } from '@server/components/error/error';
import { settingsService } from './settingsServices';
import { pool } from '@server/db';

export const getSettings: AsyncRequestHandler = async (req, res) => {
    try {
        return pool.query(
            'SELECT * FROM settings',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (qErr: unknown, qRes: any) => {
                res.json(qRes.rows);
            }
        );
    } catch (qErr) {
        throw new AppError(
            qErr.response.statusText,
            qErr.response.status,
            'Some problem to get settings'
        );
    }
};

export const postSettings: AsyncRequestHandler = async (req, res) => {
    try {
        const result = await settingsService.settingsRequest(req, res);

        try {
            execSync(`git clone ${result.repoName}`, {
                stdio: [0, 1, 2],
                cwd: path.resolve(__dirname, '../'),
            });
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'Some problem to clone repo'
            );
        }
        return res.send(`New settings: ${result}`);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to post new settings'
        );
    }
};
