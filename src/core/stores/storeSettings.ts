import { action, observable, runInAction } from 'mobx';

import { ISettings } from '@shared/interfaces/settings';
import { EndPoints } from '@shared/enums';
import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { requests } from '../api/requestApi';

export class StoreSettings {
    @observable settings: ISettings;

    @action async getSettings() {
        try {
            const response = await requests.get(EndPoints.Settings);
            runInAction(() => {
                this.settings = response;
            });
        } catch (error) {
            throw new AppError('Cannot get settings', HttpCode.NOT_FOUND);
        }
    }

    @action async saveSettings(settings: ISettings) {
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
