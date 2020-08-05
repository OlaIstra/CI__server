import { AppError } from '@server/components/error/error';

import { Settings } from './settingsEntity';
import { getRepository } from 'typeorm';

const repository = getRepository(Settings);

export const settingsService = {
    getSettings: async (): Promise<Settings | undefined> => {
        try {
            return repository.findOne();
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'Some problem to get settings from API'
            );
        }
    },

    saveSettings: async (settingsData: Settings): Promise<Settings> => {
        try {
            //добавить фнукционал по update settings - если в базе ужзе есть настройки, то надо перерисать, а если нет, то добавить
            return repository.save(settingsData);
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'Some problem to post new settings through API'
            );
        }
    },
};
