import deepEqual from 'deep-equal';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { getJobRepository, Job } from './jobEntity';
import { IJobCommit } from '@shared/interfaces/jobs';
import { ErrorMessage } from '@shared/error/errorMessage';

export const jobService = {
    getJobs: async (): Promise<Job[]> => {
        try {
            return getJobRepository().find();
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_SERVICE_GET_JOBS} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    },

    getJob: async (jobId: string): Promise<Job | undefined> => {
        try {
            return getJobRepository().findOne(jobId);
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_SERVICE_GET_JOB} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    },

    saveJob: async (job: IJobCommit): Promise<IJobCommit> => {
        try {
            return getJobRepository().save(job);
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_SERVICE_SAVE_JOB} ${error}`,
                HttpCode.BAD_REQUEST,
            );
        }
    },

    updateJob: async (jobId: string, jobData: Job): Promise<number> => {
        try {
            const repository = getJobRepository();

            const prevJob = await repository.findOne({ id: jobId });
            const isEqual = deepEqual(prevJob, jobData);

            if (!isEqual) {
                repository.save(jobData);
                return HttpCode.OK;
            } else {
                return HttpCode.NOT_MODIFIED;
            }
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_SERVICE_UPDATE_JOB} ${error}`,
                HttpCode.BAD_REQUEST,
            );
        }
    },

    deleteJobs: async (): Promise<void> => {
        try {
            await getJobRepository().clear();
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_SERVICE_DELETE_JOBS} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    },

    getJobDetails: async (jobId: string): Promise<Job | undefined> => {
        try {
            return getJobRepository().findOne({ id: jobId });
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_SERVICE_GET_JOB_DETAILS} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    },
};
