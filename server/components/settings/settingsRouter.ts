import { Router } from 'express';

import { settingsValidatonSchema } from './settingsValidationSchema';
import { getSettings, saveSettings } from './settingsControllers';
import { validateRequest } from '../validation/validateRequest';

const router = Router();

router.get('/', getSettings);
router.post('/', validateRequest(saveSettings, settingsValidatonSchema));

export default router;
