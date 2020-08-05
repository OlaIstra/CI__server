export interface ISettings {
    id: string;
    repoName: string;
    buildCommand: string;
    mainBranch: string;
    timePeriod: number;
}

export interface ISettingsData {
    data: ISettings;
}
