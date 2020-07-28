import {
    createConnection,
    getConnection,
    ConnectionOptions,
    Connection,
} from 'typeorm';
import pino from 'pino';

const logger = pino({
    level: 'info',
    prettyPrint: true,
});

export const connectDb = async (
    typeOrmConfig: ConnectionOptions,
    retries = 2
): Promise<Connection | undefined> => {
    while (retries) {
        try {
            logger.info(`try to connect`);
            await createConnection(typeOrmConfig)
                .then(connection => {
                    // here you can start to work with your entities
                })
                .catch(error => {
                    throw new Error(error);
                });
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
};
