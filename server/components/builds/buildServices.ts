import { AppError } from '@server/components/error/error';
import { Build } from './buildsEntity';
import { getRepository } from 'typeorm';

const repository = getRepository(Build);

export const buildService = {
    getBuilds: async (): Promise<Build[]> => {
        try {
            return repository.find();
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'Some problem to get list of builds from API'
            );
        }
    },

    saveBuild: async (buildData: Build): Promise<Build> => {
        try {
            return repository.save(buildData);
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'There is no posibility to post new build through API'
            );
        }
    },

    getBuildDetails: async (buildId: string): Promise<Build | undefined> => {
        try {
            return repository.findOne({ id: buildId });
        } catch (err) {
            throw new AppError(
                err.response.statusText,
                err.response.status,
                'There is no such build found through API'
            );
        }
    },
};
