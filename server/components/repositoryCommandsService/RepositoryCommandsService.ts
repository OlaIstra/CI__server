import path from 'path';
import { promisify } from 'util';
import { exec, ExecOptions } from 'child_process';
import os from 'os';
import fs from 'fs';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { envConfig } from '@shared/config';
import { IJobCommit } from '@shared/interfaces/jobs';

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
        } catch (err) {
            throw new AppError(`Cannot clone repo: ${err}`, HttpCode.FORBIDDEN);
        }
    }

    async executeCommand(
        command: string,
        options?: ExecOptions,
    ): Promise<{ stdout: string | Buffer; stderr: string | Buffer }> {
        return execAsync(command, options);
    }

    findLocalRepo(): boolean {
        try {
            return fs.existsSync(path.join(homeDir, localRepo));
        } catch (err) {
            throw new AppError(`Cannot find local repo: ${err}`, HttpCode.NOT_FOUND);
        }
    }

    deleteLocalRepo(): void {
        try {
            const command = `rm -rf ${localRepoPath}`;
            this.executeCommand(command);
        } catch (err) {
            throw new AppError(`Cannot delete local repo: ${err}`, HttpCode.FORBIDDEN);
        }
    }

    checkout(branchName: string): void {
        try {
            const command = `cd ${localRepoPath} && git checkout ${branchName}`;
            this.executeCommand(command);
        } catch (err) {
            throw new AppError(`Cannot checkout branch: ${err}`, HttpCode.FORBIDDEN);
        }
    }

    public async getCommitByHash(commitHash = '', branchName = 'master'): Promise<IJobCommit> {
        await this.checkout(branchName);

        const { stdout } = await this.executeCommand(`git log -1 --format="%an|%B" ${commitHash}`, {
            cwd: localRepoPath,
        });

        const [authorName, commitMessage] = String(stdout)
            .replace(/\n/g, '')
            .split('|');

        return { authorName, commitMessage, commitHash, branchName };
    }
}
