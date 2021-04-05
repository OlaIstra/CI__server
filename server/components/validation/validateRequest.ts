import { Request, Response, NextFunction } from 'express';
import { checkSchema, Schema } from 'express-validator';

import { HttpCode } from '@shared/error/httpStatusCodes';

export const validateRequest = (
    func: (req: Request<any>, res: Response, next: NextFunction) => void,
    schema: Schema,
) => async (req: Request, res: Response, next: NextFunction) => {
    const validatedRequest = await checkSchema(schema).run(req);
    let isValidRequest = true;
    const errors = validatedRequest.reduce(function(result: any, item: any) {
        if (item.errors.length > 0) {
            isValidRequest = false;
            result.push(item.errors[0].msg);
        }
        return result;
    }, []);

    if (isValidRequest) {
        func(req, res, next);
    } else {
        res.send({ status: HttpCode.BAD_REQUEST, message: `${errors}` });
    }
};
