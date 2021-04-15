import deepEqual from 'deep-equal';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { getSettingsRepository, Settings } from './settingsEntity';
import { ErrorMessage } from '@shared/error/errorMessage';

export const settingsService = {
    getSettings: async (): Promise<Settings | undefined> => {
        try {
            return getSettingsRepository().findOne();
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_SERVICE_GET_SETTINGS} ${error}`,
                HttpCode.NOT_FOUND,
            );
        }
    },

    saveSettings: async (settingsData: Settings): Promise<number> => {
        try {
            const repository = getSettingsRepository();

            const prevSettings = await repository.findOne();

            if (!prevSettings) {
                await repository.save(settingsData);
                return HttpCode.CREATED;
            }

            const newSettings = await repository.create({
                ...settingsData,
                id: prevSettings.id,
            });
            const isEqual = deepEqual(prevSettings, newSettings);

            if (!isEqual) {
                await repository.update(prevSettings.id, newSettings);
                return HttpCode.CREATED;
            } else {
                return HttpCode.NOT_MODIFIED;
            }
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_SERVICE_SAVE_SETTINGS} ${error}`,
                HttpCode.BAD_REQUEST,
            );
        }
    },
};
