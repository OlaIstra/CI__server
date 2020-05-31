import { Request, Response } from 'express';

import { axiosInstance } from '../../settings';
import { state } from '../../state';
import { IBuilds, IBuildDetails, IBuildPost } from '../../interfaces';

export const getBuilds = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const response = await axiosInstance.get<IBuilds>(`/api/build/list`);

        state.builds = response.data.data;
        return res.send(response.data);
    } catch (err) {
        console.log(err);
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
        console.log(err);
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
        console.log(err);
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
        console.log(err);
    }
};
