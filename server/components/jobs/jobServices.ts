import deepEqual from 'deep-equal';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { getJobRepository, Job } from './jobEntity';
import { IJobCommit } from '@shared/interfaces/jobs';

export const jobService = {
    getJobs: async (): Promise<Job[]> => {
        try {
            return getJobRepository().find();
        } catch (err) {
            throw new AppError('Cannot get jobs', HttpCode.NOT_FOUND);
        }
    },

    getJob: async (jobId: string): Promise<Job | undefined> => {
        try {
            return getJobRepository().findOne(jobId);
        } catch (err) {
            throw new AppError('Cannot get job', HttpCode.NOT_FOUND);
        }
    },

    saveJob: async (job: IJobCommit): Promise<IJobCommit> => {
        try {
            return getJobRepository().save(job);
        } catch (err) {
            throw new AppError(`Cannot save job - ${err}`, HttpCode.FORBIDDEN);
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
        } catch (err) {
            throw new AppError('Cannot update job', HttpCode.FORBIDDEN);
        }
    },

    deleteJobs: async (): Promise<void> => {
        try {
            await getJobRepository().clear();
        } catch (err) {
            throw new AppError('Cannot delete jobs', HttpCode.FORBIDDEN);
        }
    },

    getJobDetails: async (jobId: string): Promise<Job | undefined> => {
        try {
            return getJobRepository().findOne({ id: jobId });
        } catch (err) {
            throw new AppError('Cannot get job details', HttpCode.NOT_FOUND);
        }
    },
};
