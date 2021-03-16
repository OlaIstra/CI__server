import { ISettings } from '@shared/interfaces/settings';
import { SettingsStore } from './storeSettings';

export default class RootStore {
    settingsStore: SettingsStore;

    constructor(settings?: ISettings) {
        this.settingsStore = new SettingsStore(settings);
    }
}
