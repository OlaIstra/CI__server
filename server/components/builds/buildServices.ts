import { axiosInstance } from '../../settings';
import { IBuilds, IBuildDetails, IBuildPost } from './interfaces';
import { AppError } from '../error/error';
import { AsyncRequestHandlerApi } from '../../interfaces';

export const getBuildsService: AsyncRequestHandlerApi<IBuilds> = async () => {
    try {
        const response = await axiosInstance.get<IBuilds>(`/api/build/list`);

        return response.data;
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to get list of builds from API',
            true
        );
    }
};

export const postBuildService: AsyncRequestHandlerApi<IBuildPost> = async (
    req,
    res
) => {
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
            'There is no posibility to post new build through API',
            true
        );
    }
};

export const getBuildDetailsService: AsyncRequestHandlerApi<IBuildDetails> = async (
    req,
    res
) => {
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
            'There is no such build found through API',
            true
        );
    }
};

export const getBuildLogsService: AsyncRequestHandlerApi<string> = async (
    req,
    res
) => {
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
            'There is no logs to get through API',
            true
        );
    }
};
