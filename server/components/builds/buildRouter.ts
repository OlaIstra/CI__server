import { Router } from 'express';

import {
    getBuilds,
    saveBuild,
    getBuildDetails,
    getBuildLogs,
} from './buildControllers';

const router = Router();

router.get('/', getBuilds);

router.post('/:commitHash', saveBuild);

router.get('/:id', getBuildDetails);

router.get('/:id/logs', getBuildLogs);

export default router;
