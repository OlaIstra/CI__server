import { Schema } from 'express-validator';

export const jobsValidatonSchema: Schema = {
    commitMessage: {
        in: ['body'],
        isEmpty: {
            errorMessage: 'commitMessage is required',
            negated: true,
        },
    },
    branchName: {
        in: ['body'],
        isString: true,
    },
    authorName: {
        in: ['body'],
        isString: true,
    },
    commitHash: {
        in: ['params', 'query'],
        isEmpty: {
            errorMessage: 'commitHash is required',
            negated: true,
        },
    },
};
