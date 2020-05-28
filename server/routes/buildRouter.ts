import { Router } from 'express';

import {
    getBuilds,
    postBuild,
    getBuildDetails,
    getBuildLogs,
} from '../controllers/buildControllers';

const router = Router();

router.get('/', getBuilds);

router.post('/:commitHash', postBuild);

router.get('/:buildId', getBuildDetails);

router.get('/:buildId/logs', getBuildLogs);

export default router;
