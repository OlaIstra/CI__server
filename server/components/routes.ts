import { Router } from 'express';

import buildRouter from './builds/buildRouter';
import settingsRouter from './settings/settingsRouter';

const router = Router();

router.use('/settings', settingsRouter);
router.use('/builds', buildRouter);

export default router;
