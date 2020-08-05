import { Router } from 'express';
import { bootstrap } from './app';

bootstrap({
    port: 8080,
    router: {
        prefix: '/api',
        getRouter: async (): Promise<() => Router> => {
            const getRouter = await import('./components/routes');
            return getRouter.default;
        },
    },
});
