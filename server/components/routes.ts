import { Router } from 'express';

import buildRouter from './builds/buildRouter';
import settingsRouter from './settings/settingsRouter';

const router = Router();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function() {
    router.use('/settings', settingsRouter);
    router.use('/builds', buildRouter);

    return router;
}
