import { bootstrap } from './app';

bootstrap({
    port: 8080,
    router: {
        prefix: '/api',
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        getRouter: async () => {
            const getRouter = await import('./components/routes');
            return getRouter.default;
        },
    },
});
