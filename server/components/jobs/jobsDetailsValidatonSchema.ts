export const jobsDetailsValidatonSchema = {
    id: {
        in: ['params', 'query'],
        isEmpty: {
            errorMessage: 'ID is required',
            negated: true,
        },
    },
};
