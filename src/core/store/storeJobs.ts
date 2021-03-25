import { action, makeObservable, observable, runInAction } from 'mobx';

import { IJob, IJobLogs, IJobDetails } from '@shared/interfaces/jobs';
import { EndPoints } from '@shared/enums';
import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { requestsJobDetails, requestsJobLogs, requestsJobs } from '@core/api/requestApi';

export class JobsStore {
    jobs: Array<IJob> | undefined;
    jobDetais: IJobDetails | undefined;
    jobLogs: IJobLogs | undefined;

    constructor(jobs?: Array<IJob>, jobDetais?: IJobDetails, jobLogs?: IJobLogs) {
        makeObservable(this, {
            jobs: observable,
            getJobs: action,
            saveJob: action,
            getJobDetails: action,
            getJobLogs: action,
            deleteJobs: action,
        });
        this.jobs = jobs;
        this.jobDetais = jobDetais;
        this.jobLogs = jobLogs;
    }

    async getJobs() {
        try {
            const response = await requestsJobs.get(EndPoints.Jobs);
            runInAction(() => {
                this.jobs = response;
            });
        } catch (error) {
            throw new AppError('Cannot get jobs. Bug in store jobs', HttpCode.NOT_FOUND);
        }
    }

    async saveJob(job: IJob) {
        try {
            const response = await requestsJobs.post(EndPoints.Jobs, job);
            runInAction(() => {
                // one job or all jobs in responce
                this.jobs = response;
            });
        } catch (error) {
            throw new AppError('Cannot save job', HttpCode.FORBIDDEN);
        }
    }

    async getJobDetails(id: string) {
        try {
            const response = await requestsJobDetails.get(EndPoints.Jobs, id);
            runInAction(() => {
                this.jobDetais = response;
            });
        } catch (error) {
            throw new AppError('Cannot get job details', HttpCode.FORBIDDEN);
        }
    }

    async getJobLogs(id: string) {
        try {
            const response = await requestsJobLogs.get(EndPoints.Jobs, id);
            runInAction(() => {
                this.jobLogs = response;
            });
        } catch (error) {
            throw new AppError('Cannot get job logs', HttpCode.FORBIDDEN);
        }
    }

    async deleteJobs() {
        try {
            const response = await requestsJobs.delete(EndPoints.Jobs);
            runInAction(() => {
                // what in the responce?
                this.jobs = response;
            });
        } catch (error) {
            throw new AppError('Cannot delete jobs', HttpCode.FORBIDDEN);
        }
    }
}
