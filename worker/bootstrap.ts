import express from 'express';

interface IConfig {
    port?: number;
    router?: { prefix: string; getRouter: () => Promise<() => express.Router> };
}

export async function bootstrap(config: IConfig): Promise<void> {
    const app = await express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const router = await config.router?.getRouter();

    if (router) {
        app.use('/worker', router());
    }

    await app.listen(config.port, function() {
        console.log(`Worker is on the port ${config.port}`);
    });
}
