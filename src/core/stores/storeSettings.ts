import { action, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import { ISettings } from '@shared/interfaces/settings';

import { Activities } from '../api/requestApi';

class StoreSettings {
    @observable settings: ISettings;

    @action async getSettings() {
        try {
            const response = await Activities.getSettings();
            runInAction(() => {
                this.settings = response;
            });
        } catch (error) {
            // TODO error
        }
    }

    @action async saveSettings(settings: ISettings) {
        try {
            const response = await Activities.saveSettings(settings);
            runInAction(() => {
                this.settings = response;
            });
        } catch (error) {
            // TODO error
        }
    }
}

export default createContext(new StoreSettings());
