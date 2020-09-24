export interface ISettings {
    id: string;
    userName: string;
    repoName: string;
    buildCommand: string;
    mainBranch: string;
    timePeriod: number;
}

export interface ISettingsData {
    data: ISettings;
}

export type SettingsUnion = 'repoName' | 'userName' | 'buildCommand' | 'mainBranch' | 'timePeriod';
