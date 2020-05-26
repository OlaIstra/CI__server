export interface IBuild {
    id: string;
    configurationId: string;
    buildNumber: number;
    commitMessage: string;
    commitHash: string;
    branchName: string;
    authorName: string;
    status: string;
}

export interface IState {
    builds: Array<IBuild>;
}
