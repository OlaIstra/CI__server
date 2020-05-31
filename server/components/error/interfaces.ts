import { HttpCode } from './httpStatusCodes';

export interface AppErrorOptionals {
    isOperational?: boolean;
    code?: HttpCode;
    logger?: string;
}

export interface ErrorResponse {
    status: {
        code: number;
        message: string;
    };
}
