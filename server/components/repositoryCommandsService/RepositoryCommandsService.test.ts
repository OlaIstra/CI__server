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
        mockCloneRepo.mockResolvedValue(repository);

        const repo = await new RepositoryCommandsService().cloneRepo(repoName);

        expect(repo).toEqual(repository);
    });

    it('should return commit information if commitHash provided', async () => {
        const commitHash = '1234567';
        const commitInfo = { authorName: 'author', commitMessage: 'commit message', commitHash };
        mockGetCommitByHash.mockResolvedValue(commitInfo);

        const commit = await new RepositoryCommandsService().getCommitByHash(commitHash);

        expect(commit).toEqual(commitInfo);
    });

    it('should return error if error occures', async () => {
        const error = new AppError('Not found', HttpCode.NOT_FOUND);
        const repoName = 'test/test';
        const commitHash = '1234567';
        mockCloneRepo.mockResolvedValue(error);
        mockGetCommitByHash.mockResolvedValue(error);

        const resultClone = await new RepositoryCommandsService().cloneRepo(repoName);
        const resultGetCommit = await new RepositoryCommandsService().getCommitByHash(commitHash);

        expect(resultClone).toEqual(error);
        expect(resultGetCommit).toEqual(resultGetCommit);
    });
});
