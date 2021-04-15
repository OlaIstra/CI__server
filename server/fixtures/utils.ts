import { getConnection, getRepository } from 'typeorm';
import path from 'path';

import { HttpCode } from '@shared/error/httpStatusCodes';
import { AppError } from '@shared/error/error';
import { connectDb } from '@server/connectDb';
import { typeOrmConfig } from '@server/typeorm.config';
import { Settings as SettingsEntity } from '@server/components/settings/settingsEntity';
import { Job as JobEntity } from '@server/components/jobs/jobEntity';
import { ErrorMessage } from '@shared/error/errorMessage';

type ProjectEntities = SettingsEntity | JobEntity;

const connectToDB = async () => {
    await connectDb(typeOrmConfig);
};

const getEntities = () => {
    const connection = getConnection();
    const { entityMetadatas } = connection;

    return entityMetadatas.map(entity => entity.name);
};

const cleanFixtures = (entitiesList: string[]) => {
    try {
        entitiesList.forEach(async (entityName: string) => {
            const repo = await getRepository(entityName);
            repo.clear();
        });
    } catch (error) {
        throw new AppError(`${ErrorMessage.FAILED_CLEAN_TEST_DATA} ${error}`, HttpCode.NOT_FOUND);
    }
};

const loadFixtures = async (entitiesList: string[]) => {
    try {
        entitiesList.forEach(async (entityName: string) => {
            const repository = await getRepository(entityName);

            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { default: fixtures } = require(path.join(__dirname, `./fake${entityName}.ts`));

            const fakeData = fixtures.map((element: ProjectEntities) => repository.create(element));

            await repository.save(fakeData);
        });
    } catch (error) {
        throw new AppError(`${ErrorMessage.FAILED_LOAD_TEST_DATA} ${error}`, HttpCode.BAD_REQUEST);
    }
};

export const reloadFixtures = async () => {
    await connectToDB();
    const entities = getEntities();

    await cleanFixtures(entities);
    await loadFixtures(entities);
};

reloadFixtures();
