import { action, makeObservable, observable, runInAction } from 'mobx';

import { IJob, IJobDetails } from '@shared/interfaces/jobs';
import { EndPoints } from '@shared/enums';
import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { requestsJobDetails, requestsJobs } from '@core/api/requestApi';
import { ErrorMessage } from '@shared/error/errorMessage';

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
            throw new AppError(
                `${ErrorMessage.FAILED_STORE_GET_JOBS} ${error}`,
                HttpCode.NOT_FOUND,
            );
        }
    }

    async saveJob(job: IJob) {
        try {
            const response = await requestsJobs.post(EndPoints.Jobs, job);
            runInAction(() => {
                this.jobs = response;
            });
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_STORE_SAVE_JOB} ${error}`,
                HttpCode.BAD_REQUEST,
            );
        }
    }

    async getJobDetails(id: string) {
        try {
            const response = await requestsJobDetails.get(EndPoints.Jobs, id);
            runInAction(() => {
                this.jobDetais = response;
            });
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_STORE_GET_JOB_DETAILS} ${error}`,
                HttpCode.NOT_FOUND,
            );
        }
    }

    async deleteJobs() {
        try {
            const response = await requestsJobs.delete(EndPoints.Jobs);
            runInAction(() => {
                this.jobs = response;
            });
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_STORE_DELETE_JOBS} ${error}`,
                HttpCode.NOT_FOUND,
            );
        }
    }
}
