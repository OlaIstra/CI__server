import { axiosInstance } from '@server/settings';
import { IBuilds, IBuildDetails, IBuildPost } from './interfaces';
import { AppError } from '@server/components/error/error';

export const buildService = {
    getBuilds: async (): Promise<IBuilds> => {
        try {
            const response = await axiosInstance.get<IBuilds>(
                `/api/build/list`
            );

            return response.data;
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'Some problem to get list of builds from API'
            );
        }
    },

    buildRequest: async (req, res): Promise<IBuildPost> => {
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

            return response.data;
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'There is no posibility to post new build through API'
            );
        }
    },

    getBuildDetails: async (req, res): Promise<IBuildDetails> => {
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

            return response.data;
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'There is no such build found through API'
            );
        }
    },

    getBuildLogs: async (req, res): Promise<string> => {
        const { buildId } = req.params;

        try {
            const response = await axiosInstance.get<string>(`/api/build/log`, {
                params: {
                    buildId,
                },
            });

            return response.data;
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'There is no logs to get through API'
            );
        }
    },
};
