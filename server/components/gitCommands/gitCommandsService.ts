import path from 'path';
import { promisify } from 'util';
import { exec, ExecOptions } from 'child_process';
import os from 'os';
import fs from 'fs';

import { AppError } from '@server/components/error/error';
import { IBuildCommit } from '@server/components/builds/interfaces';

require('dotenv').config();

const localRepo = process.env.LOCAL_REPO || '';
const execAsync = promisify(exec);
const homeDir = os.homedir();
const localRepoPath = path.join(homeDir, localRepo);

export const gitCommandsService = {
    executeCommand: async (
        command: string,
        options?: { cwd: 'buffer' | null | string } & ExecOptions
    ): Promise<{ stdout: string | Buffer; stderr: string | Buffer }> => {
        return await execAsync(command, options);
    },

    cloneRepo: (username: string, repoName: string): void => {
        try {
            const isLocalRepo = gitCommandsService.findLocalRepo();

            if (isLocalRepo) {
                gitCommandsService.deleteLocalRepo();
            }

            const command = `git clone https://github.com/${username}/${repoName} ${localRepoPath}`;
            gitCommandsService.executeCommand(command);
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    findLocalRepo: (): boolean => {
        try {
            const file = fs.statSync(path.join(homeDir, localRepo));
            return file.isDirectory();
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    deleteLocalRepo: (): void => {
        try {
            const command = `rm -rf ${localRepoPath}`;
            gitCommandsService.executeCommand(command);
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    checkout: (branchName: string): void => {
        try {
            const command = `cd ${localRepoPath} && git checkout ${branchName}`;
            gitCommandsService.executeCommand(command);
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    getCommitByHash: async (
        commitHash = '',
        branchName = 'master'
    ): Promise<IBuildCommit> => {
        await gitCommandsService.checkout(branchName);

        const { stdout } = await gitCommandsService.executeCommand(
            `git log -1 --format="%an|%B" ${commitHash}`,
            {
                cwd: localRepoPath,
            }
        );

        const [authorName, commitMessage] = String(stdout)
            .replace(/\n/g, '')
            .split('|');

        return { authorName, commitMessage, commitHash, branchName };
    },
};
