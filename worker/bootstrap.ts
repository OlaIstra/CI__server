import express from 'express';

import workerRouter from './workerRouter';

interface IConfig {
    port?: number;
    router?: { prefix: string; getRouter: () => Promise<() => express.Router> };
}

export async function bootstrap(config: IConfig): Promise<void> {
    const app = await express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/worker', workerRouter);

    await app.listen(config.port, function() {
        console.log(`Worker is on the port ${config.port}`);
    });
}
