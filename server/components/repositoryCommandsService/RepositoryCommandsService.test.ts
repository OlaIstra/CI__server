import { AppError } from '@shared/error/error';
import { ErrorMessage } from '@shared/error/errorMessage';
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
        const repositoryCommandsService = new RepositoryCommandsService();
        mockCloneRepo.mockResolvedValue(repository);

        const repo = await repositoryCommandsService.cloneRepo(repoName);

        expect(repo).toEqual(repository);
    });

    it('should return commit information if commitHash provided', async () => {
        const commitHash = '1234567';
        const commitInfo = { authorName: 'author', commitMessage: 'commit message', commitHash };
        const repositoryCommandsService = new RepositoryCommandsService();
        mockGetCommitByHash.mockResolvedValue(commitInfo);

        const commit = await repositoryCommandsService.getCommitByHash(commitHash);

        expect(commit).toEqual(commitInfo);
    });

    it('should return error if error occures during cloneRepo', async () => {
        const error = new AppError(
            `${ErrorMessage.FAILED_CLONE_REPO}`,
            HttpCode.SERVICE_UNAVAILABLE,
        );
        const repoName = 'test/test';
        const repositoryCommandsService = new RepositoryCommandsService();
        mockCloneRepo.mockResolvedValue(error);

        const resultClone = await repositoryCommandsService.cloneRepo(repoName);

        expect(resultClone).toEqual(error);
    });

    it('should return error if error occures during getting commit info', async () => {
        const error = new AppError(
            `${ErrorMessage.FAILED_GET_COMMIT}`,
            HttpCode.INTERNAL_SERVER_ERROR,
        );
        const commitHash = '1234567';
        const repositoryCommandsService = new RepositoryCommandsService();
        mockGetCommitByHash.mockResolvedValue(error);

        const resultGetCommit = await repositoryCommandsService.getCommitByHash(commitHash);

        expect(resultGetCommit).toEqual(resultGetCommit);
    });
});
