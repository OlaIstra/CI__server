import { action, observable, runInAction } from 'mobx';
import { ISettings } from '@shared/interfaces/settings';
import { IEndpoints } from '@shared/enums';

import { requests } from '../api/requestApi';

export class StoreSettings {
    @observable settings: ISettings;

    @action async getSettings() {
        try {
            const response = await requests.get(IEndpoints.Settings);
            runInAction(() => {
                this.settings = response;
            });
        } catch (error) {
            // TODO error
        }
    }

    @action async saveSettings(settings: ISettings) {
        try {
            const response = await requests.post(IEndpoints.Settings, settings);
            runInAction(() => {
                this.settings = response;
            });
        } catch (error) {
            // TODO error
        }
    }
}
