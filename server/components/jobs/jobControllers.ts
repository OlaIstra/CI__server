import { Response, Request } from 'express';

import { HttpCode } from '@shared/error/httpStatusCodes';
import { AppError } from '@shared/error/error';
import { RepositoryCommandsService } from '@server/components/repositoryCommandsService/RepositoryCommandsService';
import { settingsService } from '@server/components/settings/settingsServices';
import { jobService } from './jobServices';
import { Job } from './jobEntity';
import { IJobCommit } from '@shared/interfaces/jobs';
import { ErrorMessage } from '@shared/error/errorMessage';

const repositoryCommandsService = new RepositoryCommandsService();

/**
 * @fileOverview functions could throw two types of errors - backend and frontend
 */

export const getJobs = async (_: unknown, res: Response<Job[]>): Promise<void> => {
    try {
        const jobs = await jobService.getJobs();

        if (!jobs) {
            throw new AppError(`${ErrorMessage.FAILED_CONTROLLER_GET_JOBS}`, HttpCode.NOT_FOUND);
        }

        res.send(jobs);
    } catch (error) {
        throw new AppError(
            `${ErrorMessage.FAILED_CONTROLLER_GET_JOBS} ${error}`,
            HttpCode.INTERNAL_SERVER_ERROR,
        );
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
    } catch (error) {
        throw new AppError(
            `${ErrorMessage.FAILED_CONTROLLER_SAVE_JOB} ${error}`,
            HttpCode.BAD_REQUEST,
        );
    }
};

export const getJobDetails = async (
    req: Request<{ id: string }>,
    res: Response<Job>,
): Promise<void> => {
    try {
        const response = await jobService.getJobDetails(req.params.id);

        if (!response) {
            throw new AppError(
                `${ErrorMessage.FAILED_CONTROLLER_GET_JOB_DETAILS}`,
                HttpCode.NOT_FOUND,
            );
        }

        res.send(response);
    } catch (error) {
        throw new AppError(
            `${ErrorMessage.FAILED_CONTROLLER_GET_JOB_DETAILS} ${error}`,
            HttpCode.INTERNAL_SERVER_ERROR,
        );
    }
};

export const getJobLogs = async (
    req: Request<{ id: string }>,
    res: Response<Job['jobLogs']>,
): Promise<void> => {
    try {
        const result = await jobService.getJobDetails(req.params.id);

        if (!result || !result.jobLogs) {
            throw new AppError(
                `${ErrorMessage.FAILED_CONTROLLER_GET_JOB_LOGS}`,
                HttpCode.NOT_FOUND,
            );
        }

        res.send(result?.jobLogs);
    } catch (error) {
        throw new AppError(
            `${ErrorMessage.FAILED_CONTROLLER_GET_JOB_LOGS} ${error}`,
            HttpCode.INTERNAL_SERVER_ERROR,
        );
    }
};

export const deleteJobs = async (_: unknown, res: Response<string>): Promise<void> => {
    try {
        await jobService.deleteJobs();
        res.send('success');
    } catch (error) {
        throw new AppError(
            `${ErrorMessage.FAILED_CONTROLLER_DELETE_JOBS} ${error}`,
            HttpCode.INTERNAL_SERVER_ERROR,
        );
    }
};
