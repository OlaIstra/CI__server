import { RepositoryCommandsService } from './repositoryCommandsService/RepositoryCommandsService';

export interface IJobData {
    id?: string;
    repoName: string;
    commitHash: string;
    buildCommand: string;
    branchName: string;
}
export class WorkerService {
    repositoryCommandsService: RepositoryCommandsService;
    constructor(repositoryCommandsService: RepositoryCommandsService) {
        this.repositoryCommandsService = repositoryCommandsService;
        this.runCommand = this.runCommand.bind(this);
        this.backWork = this.backWork.bind(this);
    }

    async runCommand(jobData: IJobData): Promise<void> {
        // workerService.backWork(jobData);

        // return `Job from ${jobData.repoName} is started!`;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, repoName, commitHash, buildCommand, branchName } = jobData;
        console.log('jobData!!!!!!!!!!!', jobData);
        //await this.repositoryCommandsService.cloneRepo(repoName);
        //await this.repositoryCommandsService.changeDirectory();
        //await this.repositoryCommandsService.checkout(branchName);
        //await this.repositoryCommandsService.changeDirectory();
        await this.repositoryCommandsService.executeCommand('dir');
    }

    // eslint-disable-next-line sonarjs/no-identical-functions
    async backWork(jobData: IJobData) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, repoName, commitHash, buildCommand, branchName } = jobData;
        //await this.repositoryCommandsService.cloneRepo(repoName);
        return await this.repositoryCommandsService.executeCommand('dir');
        // await this.repositoryCommandsService.changeDirectory();
        // await this.repositoryCommandsService.checkout(branchName);
        // await exec command (npm install) -> возвращает вывод процесса
    }
    //return logs
}
