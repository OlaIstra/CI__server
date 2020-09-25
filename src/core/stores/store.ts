import { action, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import { ISettings } from '@server/components/settings/interfaces';

import { Activities } from '../api/requestApi';

class Store {
    @observable settings: ISettings;

    @action async getSettings() {
        try {
            const response = await Activities.getSettings();
            runInAction(() => {
                console.log('response', response);
                this.settings = response;
            });
        } catch (error) {
            console.log(error);
        }
    }

    @action async saveSettings(settings: ISettings) {
        try {
            const response = await Activities.saveSettings(settings);
            runInAction(() => {
                console.log('response', response);
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default createContext(new Store());
