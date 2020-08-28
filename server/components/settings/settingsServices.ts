import deepEqual from 'deep-equal';

import { AppError } from '@server/components/error/error';
import { Settings } from './settingsEntity';
import { getRepository } from 'typeorm';
import { HttpStatus } from '@server/HttpStatus';

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
    ): Promise<Settings | number | string | undefined> => {
        try {
            const repository = getRepository(Settings);

            const prevSettings = await repository.findOne();

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
                return HttpStatus.OK;
            } else {
                return HttpStatus.NOT_MODIFIED;
            }
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },
};
