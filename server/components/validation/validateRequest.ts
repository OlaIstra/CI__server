import { Request, Response, NextFunction } from 'express';
import { checkSchema, Schema } from 'express-validator';

import { HttpCode } from '@shared/error/httpStatusCodes';

export const validateRequest = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    func: (req: Request<any>, res: Response, next: NextFunction) => void,
    schema: Schema,
) => async (req: Request, res: Response, next: NextFunction) => {
    const validatedRequest = await checkSchema(schema).run(req);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errors: string[] = validatedRequest.reduce(function(result: string[], item: any) {
        if (item.errors.length > 0) {
            return [...result, item.errors[0].msg];
        }
        return result;
    }, []);

    if (errors.length === 0) {
        func(req, res, next);
    } else {
        res.send({ status: HttpCode.BAD_REQUEST, message: `${errors.toString()}` });
    }
};
