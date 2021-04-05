import { Request, Response, NextFunction } from 'express';
import { checkSchema, Schema } from 'express-validator';

export const validateRequest = (
    func: (req: Request<any>, res: Response, next: NextFunction) => void,
    schema: Schema,
) => async (req: Request, res: Response, next: NextFunction) => {
    const validatedRequest = await checkSchema(schema).run(req);
    let isValidRequest = true;
    validatedRequest.forEach((item: any) => {
        if (item.errors.length > 0) {
            isValidRequest = false;
            res.send({ status: 400, message: `ERROR: ${item.errors[0].msg}` });
        }
    });

    isValidRequest && func(req, res, next);
};
