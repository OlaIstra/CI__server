import { action, makeObservable, observable, runInAction } from 'mobx';

import { IJob, IJobDetails } from '@shared/interfaces/jobs';
import { EndPoints } from '@shared/enums';
import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { requestsJobDetails, requestsJobs } from '@core/api/requestApi';

export class JobsStore {
    jobs: Array<IJob> | undefined;
    jobDetais: IJobDetails | undefined;

    constructor(jobs?: Array<IJob>, jobDetais?: IJobDetails) {
        makeObservable(this, {
            jobs: observable,
            getJobs: action,
            saveJob: action,
            getJobDetails: action,
            deleteJobs: action,
        });
        this.jobs = jobs;
        this.jobDetais = jobDetais;
    }

    async setJobs(jobs: IJob[] | undefined) {
        this.jobs = jobs;
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
