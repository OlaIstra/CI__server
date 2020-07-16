import { createConnection, getConnection, ConnectionOptions } from 'typeorm';
import pino from 'pino';

import { Settings } from './components/settings/settingsEntity';
import { Builds } from './components/builds/buildsEntity';

const logger = pino({
    level: 'info',
    prettyPrint: true,
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function connectDb(typeOrmConfig: ConnectionOptions, retries = 2) {
    while (retries) {
        try {
            logger.info(`try to connect`);
            await createConnection({
                type: 'postgres',
                username: 'postgres',
                host: 'localhost',
                database: 'ciserver',
                password: 'qwerty',
                port: 5432,
                synchronize: true,
                entities: [Settings, Builds],
            })
                .then(connection => {
                    // here you can start to work with your entities
                })
                .catch(error => console.log(error));
            logger.info(`Connected`);
        } catch (err) {
            if (err.name === 'AlreadyHasActiveConnectionError') {
                return getConnection('default');
            }

            retries--;

            logger.info(`Attempts left: ${retries}`);
            await new Promise(res => setTimeout(res, 2000));
        }
    }
}
