import { Router } from 'express';

import { bootstrap } from './bootstrap';

bootstrap({
    port: process.env.WORKER_PORT,
    router: {
        prefix: '/worker',
        getRouter: async (): Promise<() => Router> => {
            const getRouter = await import('./routes');
            return getRouter.default;
        },
    },
});