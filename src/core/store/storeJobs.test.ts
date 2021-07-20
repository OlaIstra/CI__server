import { AppError } from '@shared/error/error';
import { ErrorMessage } from '@shared/error/errorMessage';
import { HttpCode } from '@shared/error/httpStatusCodes';
import { FAKE_JOBS, FAKE_JOB_DETAILS } from '@src/mocks/testData';
import JobsStore from './storeJobs';

describe('JobsStore', () => {
    let store: JobsStore;

    const getJobs = (JobsStore.prototype.getJobs = jest.fn());
    const saveJob = (JobsStore.prototype.saveJob = jest.fn());
    const getJobDetails = (JobsStore.prototype.getJobDetails = jest.fn());
    const deleteJobs = (JobsStore.prototype.deleteJobs = jest.fn());

    beforeEach(() => {
        store = new JobsStore(FAKE_JOBS, FAKE_JOB_DETAILS);
    });

    afterEach(() => {
        getJobs.mockRestore();
        saveJob.mockRestore();
        getJobDetails.mockRestore();
        deleteJobs.mockRestore();
    });

    it('should set jobs into constructor, if arguments provided', async () => {
        expect(store.jobs).toEqual(FAKE_JOBS);
        expect(store.jobDetails).toStrictEqual(FAKE_JOB_DETAILS);
    });

    it('should set jobs, if setJob method is called', async () => {
        const setJobs = (JobsStore.prototype.setJobs = jest.fn());
        setJobs.mockReturnValue(FAKE_JOBS);

        const result = await store.setJobs(FAKE_JOBS);

        expect(result).toEqual(FAKE_JOBS);
    });

    it('should show jobs, if getJobs method is called', async () => {
        getJobs.mockReturnValue(FAKE_JOBS);

        const result = await store.getJobs();

        expect(getJobs).toHaveBeenCalledTimes(1);
        expect(result).toEqual(FAKE_JOBS);
    });

    it('should save job, if saveJob method is called', async () => {
        saveJob.mockReturnValue(FAKE_JOBS[0]);

        const result = await store.saveJob(FAKE_JOBS[0]);

        expect(saveJob).toHaveBeenCalledTimes(1);
        expect(result).toEqual(FAKE_JOBS[0]);
    });

    it('should get jobDetails, if getJobDetails method is called', async () => {
        getJobDetails.mockReturnValue(FAKE_JOB_DETAILS);

        const result = await store.getJobDetails(FAKE_JOB_DETAILS.id);

        expect(getJobDetails).toHaveBeenCalledTimes(1);
        expect(result).toEqual(FAKE_JOB_DETAILS);
    });

    it('should delete jobs, if deleteJobs method is called', async () => {
        deleteJobs.mockReturnValue([]);

        const result = await store.deleteJobs();

        expect(deleteJobs).toHaveBeenCalledTimes(1);
        expect(result).toEqual([]);
    });

    it('should throw error, if when getJobs method gets error', async () => {
        const error = new AppError(`${ErrorMessage.FAILED_STORE_GET_JOBS}`, HttpCode.NOT_FOUND);
        getJobs.mockReturnValue(error);
        const result = await store.getJobs();

        expect(getJobs).toHaveBeenCalledTimes(1);
        expect(result).toEqual(error);
    });

    it('should throw error, if when saveJob method gets error', async () => {
        const error = new AppError(`${ErrorMessage.FAILED_SERVICE_SAVE_JOB}`, HttpCode.BAD_REQUEST);
        saveJob.mockReturnValue(error);

        const result = await store.saveJob(FAKE_JOBS[0]);

        expect(saveJob).toHaveBeenCalledTimes(1);
        expect(result).toEqual(error);
    });

    it('should throw error, if when getJobDetails method gets error', async () => {
        const error = new AppError(
            `${ErrorMessage.FAILED_STORE_GET_JOB_DETAILS}`,
            HttpCode.NOT_FOUND,
        );
        getJobDetails.mockReturnValue(error);

        const result = await store.getJobDetails(FAKE_JOBS[0].id);

        expect(getJobDetails).toHaveBeenCalledTimes(1);
        expect(result).toEqual(error);
    });

    it('should throw error, if when deleteJobs method gets error', async () => {
        const error = new AppError(`${ErrorMessage.FAILED_STORE_DELETE_JOBS}`, HttpCode.NOT_FOUND);
        deleteJobs.mockReturnValue(error);

        const result = await store.deleteJobs();

        expect(deleteJobs).toHaveBeenCalledTimes(1);
        expect(result).toEqual(error);
    });
});
