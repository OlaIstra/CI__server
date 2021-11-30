import { Router } from 'express';

import { WorkerController } from './workerController';

const router = Router();
const workerController = new WorkerController();

router.get('/check', workerController.checkHealth);
router.post('/start', workerController.runJob);

export default router;
