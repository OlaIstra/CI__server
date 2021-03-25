import deepEqual from 'deep-equal';
import { getRepository } from 'typeorm';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { Settings } from './settingsEntity';

export const settingsService = {
    getSettings: async (): Promise<Settings | undefined> => {
        try {
            const repository = getRepository(Settings);
            return repository.findOne();
        } catch (err) {
            throw new AppError('Cannot get settings. Bug in settingsService', HttpCode.NOT_FOUND);
        }
    },

    saveSettings: async (settingsData: Settings): Promise<number> => {
        try {
            const repository = getRepository(Settings);

            const prevSettings = await repository.findOne();

            if (!prevSettings) {
                await repository.save(settingsData);
                return HttpCode.OK;
            }

            const newSettings = repository.create({
                ...settingsData,
                id: prevSettings.id,
            });
            const isEqual = deepEqual(prevSettings, newSettings);

            if (!isEqual) {
                await repository.update(prevSettings.id, newSettings);
                return HttpCode.OK;
            } else {
                return HttpCode.NOT_MODIFIED;
            }
        } catch (err) {
            throw new AppError(`Cannot save settings - service: ${err}`, HttpCode.FORBIDDEN);
        }
    },
};
