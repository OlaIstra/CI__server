import { ConnectionOptions } from 'typeorm';
import { Settings } from './components/settings/settingsEntity';
import { Builds } from './components/builds/buildsEntity';

export const typeOrmConfig: ConnectionOptions = {
    type: 'postgres',
    username: 'postgres',
    host: 'localhost',
    database: 'ciserver',
    password: 'qwerty',
    port: 5432,
    synchronize: true,
    entities: [Settings, Builds],
};
