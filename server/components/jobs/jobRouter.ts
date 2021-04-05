import { Router } from 'express';

import { validateRequest } from './../validation/validateRequest';
import { getJobs, saveJob, getJobDetails, getJobLogs, deleteJobs } from './jobControllers';
import { jobsValidatonSchema } from './jobValidationSchema';
import { jobsDetailsValidatonSchema } from './jobsDetailsValidatonSchema';

const router = Router();

router.get('/', getJobs);

router.post('/:commitHash', validateRequest(saveJob, jobsValidatonSchema));

router.get('/:id', validateRequest(getJobDetails, jobsDetailsValidatonSchema));

router.get('/:id/logs', getJobLogs);

router.delete('/', deleteJobs);

export default router;
