import { action, makeObservable, observable, runInAction } from 'mobx';

import { ISettings } from '@shared/interfaces/settings';
import { EndPoints } from '@shared/enums';
import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { requestsSettings } from '../api/requestApi';
import { ErrorMessage } from '@shared/error/errorMessage';

const initialValues = {
    id: '',
    repoName: '',
    buildCommand: '',
    mainBranch: '',
    timePeriod: 0,
};

export class SettingsStore {
    settings: ISettings;

    constructor(settings?: ISettings) {
        makeObservable(this, {
            settings: observable,
            getSettings: action,
            saveSettings: action,
        });
        this.setSettings(settings || initialValues);
    }

    async setSettings(settings: ISettings) {
        this.settings = settings;
    }

    async getSettings() {
        try {
            const response = await requestsSettings.get(EndPoints.Settings);
            runInAction(() => {
                this.settings = response;
            });
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_STORE_GET_SETTINGS} ${error}`,
                HttpCode.NOT_FOUND,
            );
        }
    }

    async saveSettings(settings: ISettings) {
        try {
            const response = await requestsSettings.post(EndPoints.Settings, settings);
            runInAction(() => {
                this.settings = response;
            });
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_STORE_SAVE_SETTINGS} ${error}`,
                HttpCode.BAD_REQUEST,
            );
        }
    }
}
