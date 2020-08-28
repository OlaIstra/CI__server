export interface IBuild {
    id: string;
    configurationId: string;
    commitMessage: string;
    commitHash: string;
    branchName: string;
    authorName: string;
    status: string;
}

export interface IBuilds {
    data: Array<IBuild>;
}

export interface ICommit {
    data: {
        data: Array<IBuild>;
    };
}

export interface IBuildDetails extends IBuild {
    start: string;
    duration: number;
}

export interface IBuildPost {
    data: {
        id: string;
        status: string;
    };
}

export interface IBuildCommit {
    authorName: string;
    commitMessage: string;
    commitHash: string;
    branchName: string;
}
