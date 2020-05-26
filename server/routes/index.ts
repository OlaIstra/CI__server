import { Router } from 'express';

import buildRouter from './buildRouter';
import settingsRouter from './settingsRouter';

const router = Router();

router.use('/settings', settingsRouter);
router.use('/builds', buildRouter);

export default router;
