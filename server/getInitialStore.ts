import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import RootStore from '../src/core/store/rootStore';
import { settingsService } from '@server/components/settings/settingsServices';

export const getInitialStore = async (store: RootStore) => {
    try {
        const result = await settingsService.getSettings();

        if (result) {
            store.settingsStore.settings = result;
        }
        return store;
    } catch (error) {
        throw new AppError('Failed to load data', HttpCode.NOT_FOUND);
    }
};
