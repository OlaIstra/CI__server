import express, { Request, Response } from 'express';

import { axiosInstance, baseURL } from '../settings';

const router = express.Router();

router.get('', async (req: Request, res: Response) => {
    try {
        const response = await axiosInstance.get(`${baseURL}api/build/list`);
        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

router.post('/:commitHash', async (req: Request, res: Response) => {
    try {
        const response = await axiosInstance.post(
            `${baseURL}api/build/request`,
            {
                commitMessage: 'string',
                commitHash: 'string',
                branchName: 'string',
                authorName: 'string',
            }
        );
        return res.send(`Added build: ${response.config.data}`);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:buildId', async (req: Request, res: Response) => {
    const { buildId } = req.params;
    try {
        const response = await axiosInstance.get(
            `${baseURL}api/build/details?buildId=${buildId}`
        );
        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:buildId/logs', async (req: Request, res: Response) => {
    const { buildId } = req.params;
    try {
        const response = await axiosInstance.get(
            `${baseURL}api/build/log?buildId=${buildId}`
        );
        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

export default router;
