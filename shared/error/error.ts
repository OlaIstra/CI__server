import { HttpCode } from './httpStatusCodes';

export class AppError extends Error {
    public readonly status: 'fail' | 'error';
    public readonly httpCode: number;
    public readonly isOperational: boolean;

    constructor(message: string, httpCode: HttpCode, isOperational?: boolean) {
        super(message);

        Object.setPrototypeOf(this, new.target.prototype);

        this.status = `${httpCode}`.startsWith('4') ? 'fail' : 'error';
        this.httpCode = httpCode;
        this.isOperational = isOperational || true;

        Error.captureStackTrace(this);
    }
}
