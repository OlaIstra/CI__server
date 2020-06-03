import { HttpCode } from './httpStatusCodes';

export interface IAppErrorOptionals {
    isOperational?: boolean;
    code?: HttpCode;
    logger?: string;
}

export interface IErrorResponse {
    status: {
        code: number;
        message: string;
    };
}
