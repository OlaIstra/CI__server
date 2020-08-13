import deepEqual from 'deep-equal';

import { AppError } from '@server/components/error/error';
import { Settings } from './settingsEntity';
import { getRepository } from 'typeorm';

export const settingsService = {
    getSettings: async (): Promise<Settings | undefined> => {
        try {
            const repository = getRepository(Settings);
            return repository.findOne();
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    saveSettings: async (
        settingsData: Settings
    ): Promise<Settings | string | undefined> => {
        try {
            const repository = getRepository(Settings);

            const prevSettings:
                | Settings
                | undefined = await repository.findOne();

            if (!prevSettings) {
                return await repository.save(settingsData);
            }

            const newSettings = repository.create({
                ...settingsData,
                id: prevSettings.id,
            });
            const isEqual = deepEqual(prevSettings, newSettings);

            if (!isEqual) {
                await repository.update(prevSettings.id, newSettings);
                return 'success update settings';
            } else {
                return 'store previous settings';
            }
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },
};
