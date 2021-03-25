import { ISettings } from '@shared/interfaces/settings';
import { IJob } from '@shared/interfaces/jobs';
import { SettingsStore } from './storeSettings';
import { JobsStore } from './storeJobs';

export default class RootStore {
    settingsStore: SettingsStore;
    jobsStore: JobsStore;

    constructor(settings?: ISettings, jobs?: Array<IJob>) {
        this.settingsStore = new SettingsStore(settings);
        this.jobsStore = new JobsStore(jobs);
    }
}
