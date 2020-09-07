import deepEqual from 'deep-equal';
import { getRepository } from 'typeorm';
import { AppError } from '@server/components/error/error';
import { HttpStatus } from '@server/HttpStatus';

import { Settings } from './settingsEntity';

export const settingsService = {
    getSettings: async (): Promise<Settings | undefined> => {
        try {
            const repository = getRepository(Settings);
            return repository.findOne();
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    saveSettings: async (settingsData: Settings): Promise<number> => {
        try {
            const repository = getRepository(Settings);

            const prevSettings = await repository.findOne();

            if (!prevSettings) {
                await repository.save(settingsData);
                return HttpStatus.OK;
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
