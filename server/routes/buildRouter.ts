import { Request, Response, Router } from 'express';

import { axiosInstance } from '../settings';
import { state } from '../state';
import { IBuilds, IBuildDetails, IBuildPost } from './../interfaces';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const response = await axiosInstance.get<IBuilds>(`/api/build/list`);

        state.builds = response.data.data;
        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

router.post('/:commitHash', async (req: Request, res: Response) => {
    const { commitHash } = req.params;
    const { commitMessage, branchName, authorName } = req.body;

    try {
        const response = await axiosInstance.post<IBuildPost>(
            `/api/build/request`,
            {
                commitMessage: commitMessage,
                commitHash: commitHash,
                branchName: branchName,
                authorName: authorName,
            }
        );

        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:buildId', async (req: Request, res: Response) => {
    const { buildId } = req.params;

    try {
        const response = await axiosInstance.get<IBuildDetails>(
            `/api/build/details`,
            {
                params: {
                    buildId,
                },
            }
        );

        return res.send(response.data);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:buildId/logs', async (req: Request, res: Response) => {
    const { buildId } = req.params;

    try {
        const response = await axiosInstance.get<string>(`/api/build/log`, {
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
