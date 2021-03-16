import { Router } from 'express';

import { getJobs, saveJob, getJobDetails, getJobLogs, deleteJobs } from './jobControllers';

const router = Router();

router.get('/', getJobs);

router.post('/', saveJob);

router.get('/:id', getJobDetails);

router.get('/:id/logs', getJobLogs);

router.delete('/', deleteJobs);

export default router;
