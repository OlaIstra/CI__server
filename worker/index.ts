import { Router } from 'express';

import { bootstrap } from './bootstrap';

bootstrap({
    port: 8081,
    router: {
        prefix: '/worker',
        getRouter: async (): Promise<() => Router> => {
            const getRouter = await import('./routes');
            return getRouter.default;
        },
    },
});
