import { Router } from 'express';

import { getSettings, postSettings } from './settingsControllers';
//import { pool } from '@server/db';

const router = Router();

router.get('/', getSettings);
router.post('/', postSettings);

// router.post('/', (req, res, next) => {
//     const values = [req.body.id, req.body.repoName, req.body.buildCommand, req.body.mainBranch, req.body.timePeriod]
//     pool.query(`INSERT INTO settings(id, repoName, buildCommand, mainBranch, timePeriod)
//                 VALUES($1, $2, $3, $4, $5)`, values, (qErr, qRes) => {
//                     if(qErr) return next (qErr)
//                     res.json(qRes.rows)
//                 })

// })

export default router;
