import { SettingsStore } from './storeSettings';
import { JobsStore } from './storeJobs';

export default class RootStore {
    settingsStore: SettingsStore;
    jobsStore: JobsStore;

    constructor(store?: RootStore) {
        const { settingsStore, jobsStore } = store || {};
        this.settingsStore = new SettingsStore(settingsStore?.settings);
        this.jobsStore = new JobsStore(jobsStore?.jobs);
    }
}
