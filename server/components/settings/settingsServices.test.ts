import { AppError } from '@shared/error/error';
import { ErrorMessage } from '@shared/error/errorMessage';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { settingsService } from './settingsServices';

const mockFindOne = jest.fn();
const mockSave = jest.fn();
const mockCreate = jest.fn();
const mockUpdate = jest.fn();

jest.mock('./settingsEntity', () => ({
    getSettingsRepository: jest.fn().mockImplementation(() => ({
        findOne: mockFindOne,
        save: mockSave,
        create: mockCreate,
        update: mockUpdate,
    })),
}));

describe('settingsService', () => {
    const NEW_SETTINGS = {
        id: '1223',
        repoName: 'test/test',
        buildCommand: 'npm run build',
        mainBranch: 'master',
        timePeriod: 10,
    };

    const PREV_SETTINGS = {
        id: '0000',
        repoName: 'prev/prev',
        buildCommand: 'npm run prevbuild',
        mainBranch: 'master',
        timePeriod: 10,
    };

    afterEach(() => {
        mockFindOne.mockRestore();
        mockSave.mockRestore();
        mockCreate.mockRestore();
        mockUpdate.mockRestore();
    });

    it('should get settings', async () => {
        mockFindOne.mockResolvedValue(NEW_SETTINGS);

        const settings = await settingsService.getSettings();

        expect(settings).toEqual(NEW_SETTINGS);
    });

    it('should save settings if there were no settings', async () => {
        mockFindOne.mockResolvedValue(undefined);
        mockSave.mockResolvedValue(NEW_SETTINGS);

        const result = await settingsService.saveSettings(NEW_SETTINGS);

        expect(result).toEqual(HttpCode.CREATED);
    });

    it('should update settings if there were previous settings', async () => {
        mockFindOne.mockResolvedValue(PREV_SETTINGS);
        mockCreate.mockResolvedValue(NEW_SETTINGS);
        mockSave.mockResolvedValue(NEW_SETTINGS);

        const result = await settingsService.saveSettings(NEW_SETTINGS);

        expect(result).toEqual(HttpCode.CREATED);
    });

    it('should not update settings if the previous and new settings are equal', async () => {
        const NEW_SETTINGS = { ...PREV_SETTINGS };
        mockFindOne.mockResolvedValue(PREV_SETTINGS);
        mockCreate.mockResolvedValue(NEW_SETTINGS);
        mockSave.mockResolvedValue(NEW_SETTINGS);

        const result = await settingsService.saveSettings(NEW_SETTINGS);

        expect(result).toEqual(HttpCode.NOT_MODIFIED);
    });

    it('should throw error if error occures while getting settings', async () => {
        const error = new AppError(
            `${ErrorMessage.FAILED_SERVICE_GET_SETTINGS}`,
            HttpCode.NOT_FOUND,
        );
        mockFindOne.mockRejectedValue(error);

        expect(settingsService.getSettings()).rejects.toThrowError(error);
    });

    it('should throw error if error occures while saving settings', async () => {
        const error = new AppError(
            `${ErrorMessage.FAILED_SERVICE_SAVE_SETTINGS}`,
            HttpCode.BAD_REQUEST,
        );
        mockFindOne.mockRejectedValue(error);

        expect(settingsService.getSettings()).rejects.toThrowError(error);
    });
});
