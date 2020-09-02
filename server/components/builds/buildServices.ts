import deepEqual from 'deep-equal';

import { AppError } from '@server/components/error/error';
import { Build } from './buildsEntity';
import { getRepository } from 'typeorm';
import { IBuildCommit } from './interfaces';
import { HttpStatus } from '@server/HttpStatus';

export const buildService = {
    getBuilds: async (): Promise<Build[]> => {
        try {
            const repository = getRepository(Build);
            return repository.find();
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    getBuild: async (buildId: string): Promise<Build | undefined> => {
        try {
            const repository = getRepository(Build);
            return repository.findOne(buildId);
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    saveBuild: async (build: IBuildCommit): Promise<IBuildCommit> => {
        try {
            const repository = getRepository(Build);
            return repository.save(build);
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    updateBuild: async (buildId: string, buildData: Build): Promise<number> => {
        try {
            const repository = getRepository(Build);

            const prevBuild = await repository.findOne({ id: buildId });

            const isEqual = deepEqual(prevBuild, buildData);

            if (!isEqual) {
                repository.save(buildData);
                return HttpStatus.OK;
            } else {
                return HttpStatus.NOT_MODIFIED;
            }
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    deleteBuilds: async (): Promise<void> => {
        try {
            const repository = getRepository(Build);
            await repository.clear();
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },

    getBuildDetails: async (buildId: string): Promise<Build | undefined> => {
        try {
            const repository = getRepository(Build);
            return repository.findOne({ id: buildId });
        } catch (err) {
            throw new AppError(err.name, err.httpCode, err.description);
        }
    },
};
