export interface ISettings {
    id: string;
    repoName: string;
    buildCommand: string;
    mainBranch: string;
    timePeriod: number;
}

export type SettingsParameters = 'repoName' | 'buildCommand' | 'mainBranch' | 'timePeriod';
