import { Router } from 'express';

import { bootstrap } from './bootstrap';

bootstrap({
    port: 8080,
    enableSSR: true,
    router: {
        prefix: '/api',
        getRouter: async (): Promise<() => Router> => {
            const getRouter = await import('./components/routes');
            return getRouter.default;
        },
    },
});
