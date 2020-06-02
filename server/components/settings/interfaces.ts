export interface ISettings {
    id?: string;
    repoName: string;
    buildCommand: string;
    mainBranch: string;
    period: number;
}

export interface ISettingsData {
    data: ISettings;
}
