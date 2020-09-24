import { action, observable } from 'mobx';
import { createContext } from 'react';

import { Activities } from './../api/agent';
import { ISettings } from './../../../server/components/settings/interfaces';

class Store {
    @observable settings: ISettings;

    @action getSettings = () => {
        Activities.getSettings().then(response => {
            console.log('response', response);
            this.settings = response;
        });
    };

    @action saveSettings = (settings: ISettings) => {
        Activities.saveSettings(settings).then(response => {
            console.log('this.response', response);
        });
    };
}

export default createContext(new Store());
