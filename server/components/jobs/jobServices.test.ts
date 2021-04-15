import { AppError } from '@shared/error/error';
import { ErrorMessage } from '@shared/error/errorMessage';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { Job } from './jobEntity';
import { jobService } from './jobServices';

enum JobStatus {
    Waiting = 'Waiting',
    InProgress = 'InProgress',
    Success = 'Success',
    Fail = 'Fail',
    Cancelled = 'Cancelled',
}

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
    const NEW_JOBS: Job[] = [
        {
            id: '1',
            commitMessage: 'added repos',
            commitHash: '5356407',
            branchName: 'master',
            authorName: 'author',
            status: JobStatus.Waiting,
        },
        {
            id: '2',
            commitMessage: 'added testing',
            commitHash: '734ca47',
            branchName: 'master',
            authorName: 'author',
            status: JobStatus.Waiting,
        },
    ];

    const NEW_JOB: Job = {
        id: '3',
        commitMessage: 'test',
        commitHash: '1234567',
        branchName: 'master',
        authorName: 'author',
        status: JobStatus.Waiting,
    };

    const JOB_ID = '3';

    const UPDATED_JOB: Job = {
        id: '3',
        commitMessage: 'updated properties',
        commitHash: '5356407',
        branchName: 'master',
        authorName: 'author',
        status: JobStatus.Waiting,
    };

    afterEach(() => {
        mockFind.mockRestore();
        mockFindOne.mockRestore();
        mockSave.mockRestore();
        mockClear.mockRestore();
    });

    it('should get list of jobs of two jobs', async () => {
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
        const UPDATED_JOB: Job = { ...NEW_JOB };
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

    it('should throw error if error occures when get jobs', async () => {
        const error = new AppError(
            `${ErrorMessage.FAILED_SERVICE_GET_SETTINGS}`,
            HttpCode.NOT_FOUND,
        );
        mockFind.mockReturnValue(error);

        const resultJobsGet = await jobService.getJobs();

        expect(resultJobsGet).toEqual(error);
    });

    it('should throw error if error occures when save jobs', async () => {
        const error = new AppError(
            `${ErrorMessage.FAILED_SERVICE_SAVE_SETTINGS}`,
            HttpCode.BAD_REQUEST,
        );
        mockSave.mockReturnValue(error);

        const resultJobSave = await jobService.saveJob(NEW_JOB);

        expect(resultJobSave).toEqual(error);
    });
});
