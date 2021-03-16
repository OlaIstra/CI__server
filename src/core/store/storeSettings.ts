import { action, makeObservable, observable, runInAction } from 'mobx';

import { ISettings } from '@shared/interfaces/settings';
import { EndPoints } from '@shared/enums';
import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { requests } from '../api/requestApi';

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
        this.settings = settings || initialValues;
    }

    async getSettings() {
        try {
            const response = await requests.get(EndPoints.Settings);
            runInAction(() => {
                this.settings = response;
            });
        } catch (error) {
            throw new AppError('Cannot get settings. Bug in store settings', HttpCode.NOT_FOUND);
        }
    }

    async saveSettings(settings: ISettings) {
        try {
            const response = await requests.post(EndPoints.Settings, settings);
            runInAction(() => {
                this.settings = response;
            });
        } catch (error) {
            throw new AppError('Cannot save settings', HttpCode.FORBIDDEN);
        }
    }
}
