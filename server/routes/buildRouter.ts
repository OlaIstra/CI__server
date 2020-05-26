import { Request, Response, Router } from 'express';

import { axiosInstance } from '../settings';
import { state } from '../state';
import { IBuilds } from './../interfaces';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const response = (await axiosInstance.get(
            `/api/build/list`
        )) as IBuilds;

        state.builds = response.data.data;
        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

router.post('/:commitHash', async (req: Request, res: Response) => {
    const { commitHash } = req.params;
    //const { commitMessage, branchName, authorName } = req.body;

    try {
        const response = await axiosInstance.post(`/api/build/request`, {
            commitMessage: '1',
            commitHash: commitHash,
            branchName: '3',
            authorName: '4',
        });
        return res.send(`Added build: ${response}`);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:buildId', async (req: Request, res: Response) => {
    const { buildId } = req.params;

    try {
        const response = (await axiosInstance.get(`/api/build/details`, {
            params: {
                buildId,
            },
        })) as IBuilds;
        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:buildId/logs', async (req: Request, res: Response) => {
    const { buildId } = req.params;

    try {
        const response = await axiosInstance.get(`/api/build/log`, {
            params: {
                buildId,
            },
        });
        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

export default router;
