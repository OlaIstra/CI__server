import express, { Router } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { ConnectionOptions } from 'typeorm';

import swaggerDocs from './swagger.json';
import { typeOrmConfig } from './typeorm.config';
import { connectDb } from './connectDb';

require('dotenv').config();

const port = process.env.PORT;

export async function bootstrap(config: {
    port?: number;
    enableSSR?: boolean;
    router?: { prefix: string; getRouter: () => Promise<() => express.Router> };
    listenCallback?: () => void;
}): Promise<void> {
    const app = await express();

    const dbConfig = {
        ...typeOrmConfig,
    } as ConnectionOptions;

    await connectDb(dbConfig);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(morgan('combined'));

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

    const router = await config.router?.getRouter();

    if (router) {
        app.use('/api', router());
    }

    await app.listen(port, function() {
        console.log(`Server is on the port ${port}`);
    });
}
