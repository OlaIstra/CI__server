import { Request, Response } from 'express';
import { execSync } from 'child_process';
import path from 'path';

import { axiosInstance } from '../../settings';
import { ISettings } from './interfaces';
import { AppError } from '../error/error';

export const getSettings = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const response = await axiosInstance.get<ISettings>(`/api/conf`);

        return res.send(response.data);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to get settings',
            true
        );
    }
};

export const postSettings = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { repoName, buildCommand, mainBranch, period } = req.body;

    try {
        const response = await axiosInstance.post<ISettings>(`/api/conf`, {
            repoName: repoName,
            buildCommand: buildCommand,
            mainBranch: mainBranch,
            period: Number(period),
        });
        try {
            execSync(`git clone ${repoName}`, {
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
        return res.send(`New settings: ${response.config.data}`);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to post new settings',
            true
        );
    }
};
