import { FAKE_SETTINGS } from './../../mocks/testData';
import { AppError } from '@shared/error/error';
import { ErrorMessage } from '@shared/error/errorMessage';
import { HttpCode } from '@shared/error/httpStatusCodes';
import SettingsStore from './storeSettings';

describe('SettingsStore', () => {
    let store: SettingsStore;

    const getSettings = (SettingsStore.prototype.getSettings = jest.fn());
    const saveSettings = (SettingsStore.prototype.saveSettings = jest.fn());

    beforeEach(() => {
        store = new SettingsStore();
    });

    afterEach(() => {
        getSettings.mockRestore();
        saveSettings.mockRestore();
    });

    it('should ask for constructor, if arguments provided', async () => {
        store = new SettingsStore(FAKE_SETTINGS);

        expect(store.settings).toEqual(FAKE_SETTINGS);
    });

    it('should set settings, if setSettings method is called', async () => {
        store.setSettings(FAKE_SETTINGS);

        expect(store.settings).toEqual(FAKE_SETTINGS);
    });

    it('should show settings, if getSettings method is called', async () => {
        getSettings.mockReturnValue(FAKE_SETTINGS);

        const result = await store.getSettings();

        expect(getSettings).toHaveBeenCalledTimes(1);
        expect(result).toEqual(FAKE_SETTINGS);
    });

    it('should save settings, if saveSettings method is called', async () => {
        saveSettings.mockReturnValue(FAKE_SETTINGS);

        const result = await store.saveSettings(FAKE_SETTINGS);

        expect(saveSettings).toHaveBeenCalledTimes(1);
        expect(result).toEqual(FAKE_SETTINGS);
    });

    it('should throw error, if getSettings method gets error', async () => {
        const error = new AppError(`${ErrorMessage.FAILED_STORE_GET_SETTINGS}`, HttpCode.NOT_FOUND);
        getSettings.mockReturnValue(error);

        const result = await store.getSettings();

        expect(getSettings).toHaveBeenCalledTimes(1);
        expect(result).toEqual(error);
    });

    it('should throw error, if saveSettings method gets error', async () => {
        const error = new AppError(
            `${ErrorMessage.FAILED_STORE_SAVE_SETTINGS}`,
            HttpCode.BAD_REQUEST,
        );
        saveSettings.mockReturnValue(error);

        const result = await store.saveSettings(FAKE_SETTINGS);

        expect(saveSettings).toHaveBeenCalledTimes(1);
        expect(result).toEqual(error);
    });
});
