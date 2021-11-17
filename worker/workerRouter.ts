import { Router } from 'express';

import { checkHealth, runJob } from './workerController';

const router = Router();

router.get('/check', checkHealth);
router.post('/start', runJob);

export default router;
