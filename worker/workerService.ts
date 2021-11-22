import { RepositoryCommandsService } from './repositoryCommandsService/RepositoryCommandsService';

export interface IJobData {
    id: string;
    repoName: string;
    commitHash: string;
    buildCommand: string;
    branchName: string;
}

export const workerService = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    runCommand: async (jobData: IJobData) => {
        // workerService.backWork(jobData);

        // return `Job from ${jobData.repoName} is started!`;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, repoName, commitHash, buildCommand, branchName } = jobData;
        console.log('jobData!!!!!!!!!!!', jobData);
        await RepositoryCommandsService.cloneRepo(repoName);
        //await RepositoryCommandsService.changeDirectory();
        //await RepositoryCommandsService.checkout(branchName);
        await RepositoryCommandsService.changeDirectory();
        return await RepositoryCommandsService.executeCommand('dir');
    },

    // eslint-disable-next-line sonarjs/no-identical-functions
    backWork: async (jobData: IJobData) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, repoName, commitHash, buildCommand, branchName } = jobData;
        //await RepositoryCommandsService.cloneRepo(repoName);
        return await RepositoryCommandsService.executeCommand('dir');
        // await RepositoryCommandsService.changeDirectory();
        // await RepositoryCommandsService.checkout(branchName);
        // await exec command (npm install) -> возвращает вывод процесса
    },
    //return logs
};
