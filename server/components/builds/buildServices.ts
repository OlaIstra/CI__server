import deepEqual from 'deep-equal';
import { getRepository } from 'typeorm';
import { AppError } from '@shared/error/error';
import { HttpCode } from '@shared/error/httpStatusCodes';

import { Build } from './buildsEntity';
import { IBuildCommit } from './interfaces';

export const buildService = {
    getBuilds: async (): Promise<Build[]> => {
        try {
            const repository = getRepository(Build);
            return repository.find();
        } catch (err) {
            throw new AppError('Cannot get builds', HttpCode.NOT_FOUND);
        }
    },

    getBuild: async (buildId: string): Promise<Build | undefined> => {
        try {
            const repository = getRepository(Build);
            return repository.findOne(buildId);
        } catch (err) {
            throw new AppError('Cannot get build', HttpCode.NOT_FOUND);
        }
    },

    saveBuild: async (build: IBuildCommit): Promise<IBuildCommit> => {
        try {
            const repository = getRepository(Build);
            return repository.save(build);
        } catch (err) {
            throw new AppError('Cannot save build', HttpCode.FORBIDDEN);
        }
    },

    updateBuild: async (buildId: string, buildData: Build): Promise<number> => {
        try {
            const repository = getRepository(Build);

            const prevBuild = await repository.findOne({ id: buildId });

            const isEqual = deepEqual(prevBuild, buildData);

            if (!isEqual) {
                repository.save(buildData);
                return HttpCode.OK;
            } else {
                return HttpCode.NOT_MODIFIED;
            }
        } catch (err) {
            throw new AppError('Cannot update build', HttpCode.FORBIDDEN);
        }
    },

    deleteBuilds: async (): Promise<void> => {
        try {
            const repository = getRepository(Build);
            await repository.clear();
        } catch (err) {
            throw new AppError('Cannot delete builds', HttpCode.FORBIDDEN);
        }
    },

    getBuildDetails: async (buildId: string): Promise<Build | undefined> => {
        try {
            const repository = getRepository(Build);
            return repository.findOne({ id: buildId });
        } catch (err) {
            throw new AppError('Cannot get build details', HttpCode.NOT_FOUND);
        }
    },
};
