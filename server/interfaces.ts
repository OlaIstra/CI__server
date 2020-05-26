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

export interface IBuilds {
    data: {
        data: Array<IBuild>;
    };
}

export interface ISettings {
    data: {
        id: string;
        repoName: string;
        buildCommand: string;
        mainBranch: string;
        period: number;
    };
}

export interface ICommit {
    data: {
        data: Array<IBuild>;
    };
}
