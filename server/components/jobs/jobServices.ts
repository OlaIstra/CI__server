import deepEqual from 'deep-equal';
import { getRepository } from 'typeorm';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { Job } from './jobEntity';
import { IJobCommit } from '@shared/interfaces/jobs';

export const jobService = {
    getJobs: async (): Promise<Job[]> => {
        try {
            const repository = getRepository(Job);
            return repository.find();
        } catch (err) {
            throw new AppError('Cannot get jobs', HttpCode.NOT_FOUND);
        }
    },

    getJob: async (jobId: string): Promise<Job | undefined> => {
        try {
            const repository = getRepository(Job);
            return repository.findOne(jobId);
        } catch (err) {
            throw new AppError('Cannot get job', HttpCode.NOT_FOUND);
        }
    },

    saveJob: async (job: IJobCommit): Promise<IJobCommit> => {
        try {
            const repository = getRepository(Job);
            return repository.save(job);
        } catch (err) {
            throw new AppError(`Cannot save job - ${err}`, HttpCode.FORBIDDEN);
        }
    },

    updateJob: async (jobId: string, jobData: Job): Promise<number> => {
        try {
            const repository = getRepository(Job);

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
            const repository = getRepository(Job);
            await repository.clear();
        } catch (err) {
            throw new AppError('Cannot delete jobs', HttpCode.FORBIDDEN);
        }
    },

    getJobDetails: async (jobId: string): Promise<Job | undefined> => {
        try {
            const repository = getRepository(Job);
            return repository.findOne({ id: jobId });
        } catch (err) {
            throw new AppError('Cannot get job details', HttpCode.NOT_FOUND);
        }
    },
};
