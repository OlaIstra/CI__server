import { axiosInstance } from '../../settings';
import { ISettings, ISettingsData } from './interfaces';
import { AppError } from '../error/error';
import { AsyncRequestHandlerApi } from '../../interfaces';

export const getSettingsService: AsyncRequestHandlerApi<ISettingsData> = async () => {
    try {
        const response = await axiosInstance.get<ISettingsData>(`/api/conf`);

        return response.data;
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to get settings from API',
            true
        );
    }
};

export const postSettingsService: AsyncRequestHandlerApi<ISettings> = async (
    req,
    res
) => {
    const { repoName, buildCommand, mainBranch, period } = req.body;

    try {
        const response = await axiosInstance.post(`/api/conf`, {
            repoName: repoName,
            buildCommand: buildCommand,
            mainBranch: mainBranch,
            period: Number(period),
        });
        return JSON.parse(response.config.data);
    } catch (err) {
        throw new AppError(
            err.response.statusText,
            err.response.status,
            'Some problem to post new settings through API',
            true
        );
    }
};
