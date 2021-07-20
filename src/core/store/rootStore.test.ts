import RootStore from './rootStore';
import JobsStore from './storeJobs';

jest.mock('./storeJobs');

describe('RootStore', () => {
    let rootStore: RootStore;

    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        JobsStore.mockRestore();

        rootStore = new RootStore();
    });

    it('should be able to call new() on JobsStore', () => {
        expect(rootStore).toBeTruthy();
    });

    it('should call the class constructor', () => {
        expect(JobsStore).toHaveBeenCalledTimes(1);
    });
});
