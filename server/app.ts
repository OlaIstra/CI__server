import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { ConnectionOptions } from 'typeorm';

import swaggerDocs from './swagger.json';
import routes from './components/routes';
import { typeOrmConfig } from './typeorm.config';
import { connectDb } from './connectDb';

require('dotenv').config();

const port = process.env.PORT;

export async function bootstrap(config: {
    port?: number;
    router?: { prefix: string; getRouter: () => Promise<() => express.Router> };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    db?: any;
}): Promise<void> {
    const app = await express();

    const dbConfig = {
        ...typeOrmConfig,
        ...config.db,
    } as ConnectionOptions;

    await connectDb(dbConfig);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(morgan('combined'));

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    app.use('/api', routes());

    await app.listen(port, function() {
        console.log(`Server is on the port ${port}`);
    });
}
