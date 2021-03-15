import { Router } from 'express';

import jobRouter from './jobs/jobRouter';
import settingsRouter from './settings/settingsRouter';

const router = Router();

export default function(): Router {
    router.use('/settings', settingsRouter);
    router.use('/jobs', jobRouter);
    return router;
}
