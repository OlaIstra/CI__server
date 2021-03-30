import { Router } from 'express';
import { checkSchema } from 'express-validator';

import { settingsValidatonSchema } from './settingsValidationSchema';
import { getSettings, saveSettings } from './settingsControllers';

const router = Router();

router.get('/', getSettings);
router.post('/', checkSchema(settingsValidatonSchema as any), saveSettings);

export default router;
