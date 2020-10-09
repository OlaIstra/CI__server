import { config } from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

import { Settings } from './components/settings/settingsEntity';
import { Build } from './components/builds/buildsEntity';

const root = process.cwd();

config({
    path: path.resolve(root, '.env'),
});

export const typeOrmConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    synchronize: true,
    entities: [Settings, Build],
};
