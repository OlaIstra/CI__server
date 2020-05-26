import express, { Request, Response } from 'express';

import { axiosInstance, baseURL } from '../settings';

const router = express.Router();

router.get('', async (req: Request, res: Response) => {
    try {
        const response = await axiosInstance.get(`${baseURL}api/conf`);
        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

router.post('', async (req: Request, res: Response) => {
    try {
        const response = await axiosInstance.post(`${baseURL}api/conf`, {
            repoName: 'string',
            buildCommand: 'string',
            mainBranch: 'string',
            period: 0,
        });
        return res.send(`New settings: ${response.config.data}`);
    } catch (err) {
        console.log(err);
    }
});

export default router;
