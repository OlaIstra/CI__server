import { axiosInstance } from '@server/settings';
import { ISettings, ISettingsData } from './interfaces';
import { AppError } from '../error/error';

export const settingsService = {
    getSettings: async (): Promise<ISettingsData> => {
        try {
            const response = await axiosInstance.get<ISettingsData>(
                `/api/conf`
            );

            return response.data;
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'Some problem to get settings from API'
            );
        }
    },

    settingsRequest: async (req, res): Promise<ISettings> => {
        const { repoName, buildCommand, mainBranch, period } = req.body;

        try {
            const response = await axiosInstance.post<ISettings>(`/api/conf`, {
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
                'Some problem to post new settings through API'
            );
        }
    },
};
