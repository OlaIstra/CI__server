import path from 'path';
import { promisify } from 'util';
import { exec, ExecOptions } from 'child_process';
import os from 'os';
import fs from 'fs';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { envConfig } from '@shared/config';
import { IJobCommit } from '@shared/interfaces/jobs';
import { ErrorMessage } from '@shared/error/errorMessage';

const localRepo = envConfig.LOCAL_REPO || '';
const execAsync = promisify(exec);
const homeDir = os.homedir();
const localRepoPath = path.join(homeDir, localRepo);

export class RepositoryCommandsService {
    public async cloneRepo(repoName: string): Promise<void> {
        try {
            const isLocalRepo = await this.findLocalRepo();

            if (isLocalRepo) {
                this.deleteLocalRepo();
            }

            const command = `git clone https://github.com/${repoName} ${localRepoPath}`;
            this.executeCommand(command);
        } catch (error) {
            throw new AppError(`${ErrorMessage.FAILED_CLONE_REPO} ${error}`, HttpCode.NOT_FOUND);
        }
    }

    private async executeCommand(
        command: string,
        options?: ExecOptions,
    ): Promise<{ stdout: string | Buffer; stderr: string | Buffer }> {
        return execAsync(command, options);
    }

    private findLocalRepo(): boolean {
        try {
            return fs.existsSync(path.join(homeDir, localRepo));
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_FIND_LOCAL_REPO} ${error}`,
                HttpCode.NOT_FOUND,
            );
        }
    }

    private deleteLocalRepo(): void {
        try {
            const command = `rm -rf ${localRepoPath}`;
            this.executeCommand(command);
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_DELETE_LOCAL_REPO} ${error}`,
                HttpCode.NOT_FOUND,
            );
        }
    }

    private checkout(branchName: string): void {
        try {
            const command = `cd ${localRepoPath} && git checkout ${branchName}`;
            this.executeCommand(command);
        } catch (error) {
            throw new AppError(
                `${ErrorMessage.FAILED_CHECKOUT_BRANCH} ${error}`,
                HttpCode.NOT_FOUND,
            );
        }
    }

    public async getCommitByHash(commitHash = '', branchName = 'master'): Promise<IJobCommit> {
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
            throw new AppError(`${ErrorMessage.FAILED_GET_COMMIT} ${error}`, HttpCode.NOT_FOUND);
        }
    }
}
