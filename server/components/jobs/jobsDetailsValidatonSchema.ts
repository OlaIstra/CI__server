import { Schema } from 'express-validator';

export const jobsDetailsValidatonSchema: Schema = {
    id: {
        in: ['params', 'query'],
        isEmpty: {
            errorMessage: 'ID is required',
            negated: true,
        },
    },
};
