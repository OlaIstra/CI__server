import { createConnection, getConnection, ConnectionOptions, Connection } from 'typeorm';
import pino from 'pino';

const logger = pino({
    level: 'info',
    prettyPrint: true,
});

export const connectDb = async (
    typeOrmConfig: ConnectionOptions,
    retries = 2,
): Promise<Connection | undefined> => {
    while (retries) {
        try {
            await createConnection(typeOrmConfig);
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
