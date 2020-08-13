import { Router } from 'express';

import {
    getBuilds,
    saveBuild,
    getBuildDetails,
    getBuildLogs,
    deleteBuilds,
} from './buildControllers';

const router = Router();

router.get('/', getBuilds);

router.post('/', saveBuild);

router.get('/:id', getBuildDetails);

router.get('/:id/logs', getBuildLogs);

router.delete('/', deleteBuilds);

export default router;
