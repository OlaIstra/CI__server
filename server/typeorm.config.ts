import { ConnectionOptions } from 'typeorm';

import { Settings } from './components/settings/settingsEntity';
import { Job } from './components/jobs/jobEntity';
import { envConfig } from '@shared/config';

export const typeOrmConfig: ConnectionOptions = {
    type: 'postgres',
    username: envConfig.POSTGRES_USER,
    host: envConfig.DATABASE_HOST,
    database: envConfig.POSTGRES_DB,
    password: envConfig.POSTGRES_PASSWORD,
    port: Number(envConfig.POSTGRES_PORT) || 5432,
    synchronize: true,
    entities: [Settings, Job],
};
