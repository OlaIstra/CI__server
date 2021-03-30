import { checkSchema } from 'express-validator';
import { Router } from 'express';

import { getJobs, saveJob, getJobDetails, getJobLogs, deleteJobs } from './jobControllers';
import { jobsValidatonSchema } from './jobValidationSchema';
import { jobsDetailsValidatonSchema } from './jobsDetailsValidatonSchema';

const router = Router();

router.get('/', getJobs);

router.post('/:commitHash', checkSchema(jobsValidatonSchema as any), saveJob);

router.get('/:id', checkSchema(jobsDetailsValidatonSchema as any), getJobDetails);

router.get('/:id/logs', getJobLogs);

router.delete('/', deleteJobs);

export default router;
