import { Router } from 'express';

import workerRouter from './workerRouter';

const router = Router();

export default function(): Router {
    router.use('/worker', workerRouter);
    return router;
}
