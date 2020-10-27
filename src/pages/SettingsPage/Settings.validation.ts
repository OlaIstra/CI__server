import * as Yup from 'yup';

export const validationSchema = Yup.object({
    repoName: Yup.string()
        .matches(/\//, 'Invalid repository name format')
        .required('Required'),
    buildCommand: Yup.string().required('Required'),
    mainBranch: Yup.string().required('Required'),
    timePeriod: Yup.number()
        .required('Required')
        .positive('Must be positive')
        .integer('Must be a number'),
});
