export interface ISettings {
    data: {
        id?: string;
        repoName: string;
        buildCommand: string;
        mainBranch: string;
        period: number;
    };
}
