export interface ISettings {
    id: string;
    repoName: string;
    buildCommand: string;
    mainBranch: string;
    timePeriod: number;
}

export type SettingsUnion = 'repoName' | 'buildCommand' | 'mainBranch' | 'timePeriod';
