import { getConnection, ConnectionOptions, getRepository } from 'typeorm';
import path from 'path';

import { HttpCode } from './../../shared/error/httpStatusCodes';
import { AppError } from '@shared/error/error';
import { connectDb } from '@server/connectDb';
import { typeOrmConfig } from '@server/typeorm.config';
import { Settings as SettingsEntity } from '@server/components/settings/settingsEntity';
import { Job as JobEntity } from '@server/components/jobs/jobEntity';

type ProjectEntities = SettingsEntity | JobEntity;

const connectToDB = async () => {
    const dbConfig = {
        ...typeOrmConfig,
    } as ConnectionOptions;

    await connectDb(dbConfig);
};

const getEntities = () => {
    const connection = getConnection();
    const { entityMetadatas } = connection;
    const entitiesList: string[] = [];

    entityMetadatas.forEach(entity => {
        entitiesList.push(entity.name);
    });

    return entitiesList;
};

const cleanFixtures = (entitiesList: string[]) => {
    try {
        entitiesList.forEach(async (entityName: string) => {
            const repo = await getRepository(entityName);
            repo.clear();
        });
    } catch (err) {
        throw new AppError(
            `Cannot clean data from the test database: ${err}`,
            HttpCode.BAD_REQUEST,
        );
    }
};

const loadFixtures = async (entitiesList: string[]) => {
    try {
        entitiesList.forEach(async (entityName: string) => {
            const repository = await getRepository(entityName);

            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { default: fixtures } = require(path.join(__dirname, `./fake${entityName}.ts`));

            const fakeData = fixtures.map((element: ProjectEntities) => {
                return repository.create(element);
            });

            await repository.save(fakeData);
        });
    } catch (err) {
        throw new AppError(`Cannot load data to test database: ${err}`, HttpCode.BAD_REQUEST);
    }
};

export const reloadFixtures = async () => {
    await connectToDB();
    const entities = getEntities();
    await cleanFixtures(entities);
    await loadFixtures(entities);
};

reloadFixtures();
