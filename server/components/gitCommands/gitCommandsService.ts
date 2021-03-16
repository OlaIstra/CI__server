import path from 'path';
import { promisify } from 'util';
import { exec, ExecOptions } from 'child_process';
import os from 'os';
import fs from 'fs';

import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { IJobCommit } from '@server/components/jobs/interfaces';
import { envConfig } from '@shared/config';

const localRepo = envConfig.LOCAL_REPO || '';
const execAsync = promisify(exec);
const homeDir = os.homedir();
const localRepoPath = path.join(homeDir, localRepo);

export const gitCommandsService = {
    executeCommand: async (
        command: string,
        options?: ExecOptions,
    ): Promise<{ stdout: string | Buffer; stderr: string | Buffer }> => {
        return execAsync(command, options);
    },

    cloneRepo: (repoName: string): void => {
        try {
            const isLocalRepo = gitCommandsService.findLocalRepo();

            if (isLocalRepo) {
                gitCommandsService.deleteLocalRepo();
            }

            const command = `git clone https://github.com/${repoName} ${localRepoPath}`;
            gitCommandsService.executeCommand(command);
        } catch (err) {
            throw new AppError('Cannot clone repo', HttpCode.FORBIDDEN);
        }
    },

    findLocalRepo: (): boolean => {
        try {
            const file = fs.statSync(path.join(homeDir, localRepo));
            return file.isDirectory();
        } catch (err) {
            throw new AppError('Cannot find local repo', HttpCode.NOT_FOUND);
        }
    },

    deleteLocalRepo: (): void => {
        try {
            const command = `rm -rf ${localRepoPath}`;
            gitCommandsService.executeCommand(command);
        } catch (err) {
            throw new AppError('Cannot delete local repo', HttpCode.FORBIDDEN);
        }
    },

    checkout: (branchName: string): void => {
        try {
            const command = `cd ${localRepoPath} && git checkout ${branchName}`;
            gitCommandsService.executeCommand(command);
        } catch (err) {
            throw new AppError('Cannot checkout branch', HttpCode.FORBIDDEN);
        }
    },

    getCommitByHash: async (commitHash = '', branchName = 'master'): Promise<IJobCommit> => {
        //await gitCommandsService.checkout(branchName);

        const { stdout } = await gitCommandsService.executeCommand(
            `git log -1 --format="%an|%B" ${commitHash}`,
            {
                cwd: localRepoPath,
            },
        );

        const [authorName, commitMessage] = String(stdout)
            .replace(/\n/g, '')
            .split('|');

        return { authorName, commitMessage, commitHash, branchName };
    },
};
