import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { RepositoryCommandsService } from './RepositoryCommandsService';

const mockCloneRepo = jest.fn();
const mockGetCommitByHash = jest.fn();

jest.mock('./RepositoryCommandsService', () => ({
    RepositoryCommandsService: jest.fn().mockImplementation(() => ({
        cloneRepo: mockCloneRepo,
        getCommitByHash: mockGetCommitByHash,
    })),
}));

describe('RepositoryCommandsService', () => {
    afterEach(() => {
        mockCloneRepo.mockRestore();
        mockGetCommitByHash.mockRestore();
    });

    it('should clone repo if repoName provided', async () => {
        const repository = 'repository';
        const repoName = 'test/test';
        const repoInstance = new RepositoryCommandsService();
        mockCloneRepo.mockResolvedValue(repository);

        const repo = await repoInstance.cloneRepo(repoName);

        expect(repo).toEqual(repository);
    });

    it('should return commit information if commitHash provided', async () => {
        const commitHash = '1234567';
        const commitInfo = { authorName: 'author', commitMessage: 'commit message', commitHash };
        const repoInstance = new RepositoryCommandsService();
        mockGetCommitByHash.mockResolvedValue(commitInfo);

        const commit = await repoInstance.getCommitByHash(commitHash);

        expect(commit).toEqual(commitInfo);
    });

    it('should return error if error occures during cloneRepo', async () => {
        const error = new AppError('Not found', HttpCode.NOT_FOUND);
        const repoName = 'test/test';
        const repoInstance = new RepositoryCommandsService();
        mockCloneRepo.mockResolvedValue(error);

        const resultClone = await repoInstance.cloneRepo(repoName);

        expect(resultClone).toEqual(error);
    });

    it('should return error if error occures during getting commit info', async () => {
        const error = new AppError('Not found', HttpCode.NOT_FOUND);
        const commitHash = '1234567';
        const repoInstance = new RepositoryCommandsService();
        mockGetCommitByHash.mockResolvedValue(error);

        const resultGetCommit = await repoInstance.getCommitByHash(commitHash);

        expect(resultGetCommit).toEqual(resultGetCommit);
    });
});
