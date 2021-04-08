import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { jobService } from './jobServices';

const mockFind = jest.fn();
const mockFindOne = jest.fn();
const mockSave = jest.fn();
const mockClear = jest.fn();

jest.mock('./jobEntity', () => ({
    getJobRepository: jest.fn().mockImplementation(() => ({
        find: mockFind,
        findOne: mockFindOne,
        save: mockSave,
        clear: mockClear,
    })),
}));

describe('jobService', () => {
    const NEW_JOBS = [
        {
            id: '1',
            commitMessage: 'added repos',
            commitHash: '5356407',
            branchName: 'master',
            authorName: 'author',
            status: 'Waiting',
        },
        {
            id: '2',
            commitMessage: 'added testing',
            commitHash: '734ca47',
            branchName: 'master',
            authorName: 'author',
            status: 'Waiting',
        },
    ];

    const NEW_JOB = {
        id: '3',
        commitMessage: 'test',
        commitHash: '1234567',
        branchName: 'master',
        authorName: 'author',
        status: 'Waiting',
    };

    const JOB_ID = '3';

    const UPDATED_JOB = {
        id: '3',
        commitMessage: 'updated properties',
        commitHash: '5356407',
        branchName: 'master',
        authorName: 'author',
        status: 'Waiting',
    };

    afterEach(() => {
        mockFind.mockRestore();
        mockFindOne.mockRestore();
        mockSave.mockRestore();
        mockClear.mockRestore();
    });

    it('should get list of jobs', async () => {
        mockFind.mockResolvedValue(NEW_JOBS);

        const jobs = await jobService.getJobs();

        expect(jobs).toEqual(NEW_JOBS);
    });

    it('should save job in the list', async () => {
        mockSave.mockResolvedValue([...NEW_JOBS, NEW_JOB]);

        const result = await jobService.saveJob(NEW_JOB);

        expect(result).toEqual([...NEW_JOBS, NEW_JOB]);
    });

    it('should update job if there is new data', async () => {
        mockFindOne.mockResolvedValue({ JOB_ID, UPDATED_JOB });
        mockSave.mockResolvedValue(UPDATED_JOB);

        const result = await jobService.updateJob(JOB_ID, UPDATED_JOB);

        expect(result).toEqual(HttpCode.OK);
    });

    it('should not update job if the previous and new jobData are equal', async () => {
        const UPDATED_JOB = { ...NEW_JOB };
        mockFindOne.mockResolvedValue(UPDATED_JOB);
        mockSave.mockResolvedValue(UPDATED_JOB);

        const result = await jobService.updateJob(JOB_ID, UPDATED_JOB);

        expect(result).toEqual(HttpCode.NOT_MODIFIED);
    });

    it('should delete list of jobs', async () => {
        mockClear.mockResolvedValue([]);

        const result = await jobService.deleteJobs();

        expect(result).toEqual(undefined);
    });

    it('should throw error if error occures', async () => {
        const error = new AppError('Not found', HttpCode.NOT_FOUND);
        mockFindOne.mockRejectedValue(error);

        expect(jobService.getJobs()).rejects.toThrowError(error);
        expect(jobService.saveJob(NEW_JOB)).rejects.toThrowError(
            `Cannot save jobs - job: ${error}`,
        );
    });
});
