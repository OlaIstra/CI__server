import { Response, Request } from 'express';

import { HttpCode } from '@shared/error/httpStatusCodes';
import { AppError } from '@shared/error/error';
import { RepositoryCommandsService } from '@server/components/repositoryCommandsService/RepositoryCommandsService';
import { settingsService } from '@server/components/settings/settingsServices';
import { jobService } from './jobServices';
import { Job } from './jobEntity';
import { IJobCommit } from '@shared/interfaces/jobs';

const repositoryCommandsService = new RepositoryCommandsService();

export const getJobs = async (_: unknown, res: Response<Job[]>): Promise<void> => {
    try {
        const jobs = await jobService.getJobs();
        res.send(jobs);
    } catch (err) {
        throw new AppError('Cannot get jobs', HttpCode.NOT_FOUND);
    }
};

export const saveJob = async (
    req: Request<{ commitHash: string }>,
    res: Response<IJobCommit>,
): Promise<void> => {
    const { commitHash } = req.body;

    const settings = await settingsService.getSettings();

    const branchName = settings?.mainBranch;

    const jobInfo = await repositoryCommandsService.getCommitByHash(commitHash, branchName);

    try {
        const result = await jobService.saveJob(jobInfo);
        res.send(result);
    } catch (err) {
        throw new AppError(`Cannot save job - ${err}`, HttpCode.FORBIDDEN);
    }
};

export const getJobDetails = async (
    req: Request<{ id: string }>,
    res: Response<Job>,
): Promise<void> => {
    try {
        const response = await jobService.getJobDetails(req.params.id);
        res.send(response);
    } catch (err) {
        throw new AppError('Cannot get job details', HttpCode.NOT_FOUND);
    }
};

export const getJobLogs = async (
    req: Request<{ id: string }>,
    res: Response<Job['jobLogs']>,
): Promise<void> => {
    try {
        const result = await jobService.getJobDetails(req.params.id);
        res.send(result?.jobLogs);
    } catch (err) {
        throw new AppError('Cannot get job logs', HttpCode.NOT_FOUND);
    }
};

export const deleteJobs = async (_: unknown, res: Response<string>): Promise<void> => {
    try {
        await jobService.deleteJobs();
        res.send('success');
    } catch (err) {
        throw new AppError('Cannot delete jobs', HttpCode.FORBIDDEN);
    }
};
