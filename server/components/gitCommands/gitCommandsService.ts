import path from 'path';
import { promisify } from 'util';
import { exec } from 'child_process';
import os from 'os';
import fs from 'fs';

import { AppError } from '../error/error';
import { IBuildCommit } from '../builds/interfaces';

const localRepo = 'repository';
const execAsync = promisify(exec);
const homeDir = os.homedir();
const localRepoPath = path.join(homeDir, localRepo);

export const gitCommandsService = {
    executeCommand: async (command: string, options?: any): Promise<any> => {
        return await execAsync(command, options);
    },

    cloneRepo: (username: string, repoName: string): boolean => {
        try {
            const command = `git clone https://github.com/${username}/${repoName} ${localRepoPath}`;
            gitCommandsService.executeCommand(command);
            return true;
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

    deleteLocalRepo: (): boolean => {
        try {
            const command = `rm -rf ${localRepoPath}`;
            gitCommandsService.executeCommand(command);
            return true;
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    checkout: (branchName: string): boolean => {
        try {
            const command = `cd ${localRepoPath} && git checkout ${branchName}`;
            gitCommandsService.executeCommand(command);
            return true;
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    getCommitByHash: async (
        commitHash = '',
        branchName: string
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
