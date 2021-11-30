import path from 'path';
import { promisify } from 'util';
import { exec, ExecOptions } from 'child_process';
import os from 'os';
import fs from 'fs';

import { AppError } from '../../shared/error/error';
import { HttpCode } from '../../shared/error/httpStatusCodes';
import { envConfig } from '../../shared/config';
import { IJobCommit } from '../../shared/interfaces/jobs';
import { ErrorMessage } from '../../shared/error/errorMessage';

const localRepo = envConfig.LOCAL_REPO || '';
const execAsync = promisify(exec);
const homeDir = os.homedir();
// ToDo - fix path
//const localRepoPath = path.join(homeDir, localRepo);
const localRepoPath = 'C:/SNProjects/CI__server/pig';

export interface RepositoryCommandsService {
    cloneRepo(repoName: string): Promise<void>;
    getCommitByHash(commitHash: string, branchName?: string): Promise<IJobCommit>;
    changeDirectory(): Promise<void>;
    executeCommand(
        command: string,
        options?: ExecOptions,
    ): Promise<{ stdout: string | Buffer; stderr: string | Buffer }>;
}

export class RepositoryCommandsService {
    constructor() {
        this.cloneRepo = this.cloneRepo.bind(this);
        this.executeCommand = this.executeCommand.bind(this);
    }

    public static async cloneRepo(repoName: string): Promise<void> {
        try {
            const isLocalRepo = await this.findLocalRepo();

            if (isLocalRepo) {
                this.deleteLocalRepo();
            }

            const command = `git clone https://github.com/${repoName} ${localRepoPath}`;
            await this.executeCommand(command);
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_CLONE_REPO} ${error}`,
                HttpCode.SERVICE_UNAVAILABLE,
            );
        }
    }

    public static async executeCommand(
        command: string,
        options?: ExecOptions,
    ): Promise<{ stdout: string | Buffer; stderr: string | Buffer }> {
        return execAsync(command, options);
    }

    private static findLocalRepo(): boolean {
        try {
            return fs.existsSync(path.join(homeDir, localRepo));
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_FIND_LOCAL_REPO} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    }

    private static deleteLocalRepo(): void {
        try {
            // ToDo - fix script
            const command = 'rmdir /S /Q "C:/SNProjects/CI__server/pig"';
            this.executeCommand(command);
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_DELETE_LOCAL_REPO} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    }

    public static checkout(branchName: string): void {
        try {
            const command = `git checkout ${branchName}`;
            this.executeCommand(command);
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_CHECKOUT_BRANCH} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    }

    public static async changeDirectory(): Promise<any> {
        try {
            const command = `cd C:/SNProjects/CI__server/pig`;
            //const command = `dir`;
            return await this.executeCommand(command);
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_CHANGE_DIRECTORY} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    }

    public static async getCommitByHash(
        commitHash = '',
        branchName = 'master',
    ): Promise<IJobCommit> {
        try {
            await this.checkout(branchName);

            const { stdout } = await this.executeCommand(
                `git log -1 --format="%an|%B" ${commitHash}`,
                {
                    cwd: localRepoPath,
                },
            );

            const [authorName, commitMessage] = String(stdout)
                .replace(/\n/g, '')
                .split('|');

            return { authorName, commitMessage, commitHash, branchName };
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_GET_COMMIT} ${error}`,
                HttpCode.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
