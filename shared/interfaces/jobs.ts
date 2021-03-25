export interface IJob {
    id: string;
    configurationId?: string;
    commitMessage: string;
    commitHash: string;
    branchName: string;
    authorName: string;
    status: string;
}

export interface IJobs {
    data: Array<IJob>;
}

export interface ICommit {
    data: {
        data: Array<IJob>;
    };
}

export interface IJobDetails extends IJob {
    start: string;
    duration: number;
}

export interface IJobPost {
    data: {
        id: string;
        status: string;
    };
}

export interface IJobCommit {
    authorName: string;
    commitMessage: string;
    commitHash: string;
    branchName: string;
}

export interface IJobLogs {
    // TODO
}
