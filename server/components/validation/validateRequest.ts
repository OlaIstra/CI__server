import { Request, Response, NextFunction } from 'express';
import { checkSchema, Schema } from 'express-validator';

import { HttpCode } from '@shared/error/httpStatusCodes';

interface ValidationErrorItem {
    errors: {
        msg: string;
    }[];
}

type Middleware = (req: Request, res: Response, next: NextFunction) => void;

export const validateRequest = (func: Middleware, schema: Schema): Middleware => async (
    req,
    res,
    next,
) => {
    const validatedRequest = (await checkSchema(schema).run(req)) as ValidationErrorItem[];

    const errors: string[] = validatedRequest.reduce(function(result: string[], item) {
        if (item.errors.length > 0) {
            return [...result, item.errors[0].msg];
        }
        return result;
    }, [] as string[]);

    if (errors.length === 0) {
        func(req, res, next);
    } else {
        res.send({ status: HttpCode.BAD_REQUEST, message: `${errors.toString()}` });
    }
};
