import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import throwError from './throwError';

export default (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.send({ status: 400, message: `ERROR: ${errors.array()[0].msg}` });

        throwError({
            code: 400,
            message: errors.array()[0].msg,
        });
    }
};
