import { Request, Response } from 'express';

import { ErrorMessage } from '../shared/error/errorMessage';
import { HttpCode } from '../shared/error/httpStatusCodes';
import { AppError } from '../shared/error/error';
import { WorkerService } from './workerService';
import { RepositoryCommandsService } from './repositoryCommandsService/RepositoryCommandsService';

export class WorkerController {
    constructor() {
        this.runJob = this.runJob.bind(this);
        this.checkHealth = this.checkHealth.bind(this);
    }
    async runJob(req: Request, res: Response<any>) {
        try {
            const repositoryCommandsService: RepositoryCommandsService = new RepositoryCommandsService();
            const workerService = new WorkerService(repositoryCommandsService);
            const jobResult = await workerService.runCommand(req.body);

            res.send(jobResult);
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_WORKER_CONTROLLER_RUN_JOB} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async checkHealth(_: unknown, res: Response<string>) {
        try {
            res.send('OK!');
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_WORKER_CONTROLLER_HEALTH} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    }
}