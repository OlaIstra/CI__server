import { Request, Response } from 'express';

import { axiosInstance } from '../../settings';
import { state } from '../../state';
import { IBuilds, IBuildDetails, IBuildPost } from './interfaces';
import { AppError } from '../error/error';

export const getBuilds = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const response = await axiosInstance.get<IBuilds>(`/api/build/list`);

        state.builds = response.data.data;
        return res.send(response.data);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to get list of builds',
            true
        );
    }
};

export const postBuild = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { commitHash } = req.params;
    const { commitMessage, branchName, authorName } = req.body;

    try {
        const response = await axiosInstance.post<IBuildPost>(
            `/api/build/request`,
            {
                commitMessage: commitMessage,
                commitHash: commitHash,
                branchName: branchName,
                authorName: authorName,
            }
        );

        return res.send(response.data);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no posibility to post new build',
            true
        );
    }
};

export const getBuildDetails = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { buildId } = req.params;

    try {
        const response = await axiosInstance.get<IBuildDetails>(
            `/api/build/details`,
            {
                params: {
                    buildId,
                },
            }
        );

        return res.send(response.data);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no such build',
            true
        );
    }
};

export const getBuildLogs = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { buildId } = req.params;

    try {
        const response = await axiosInstance.get<string>(`/api/build/log`, {
            params: {
                buildId,
            },
        });

        return res.send(response.data);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'There is no logs',
            true
        );
    }
};
