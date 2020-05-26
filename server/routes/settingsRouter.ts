import express, { Request, Response } from 'express';
import { execSync } from 'child_process';
import path from 'path';

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
    const { repoName, buildCommand, mainBranch, period } = req.body;

    try {
        const response = await axiosInstance.post(`${baseURL}api/conf`, {
            repoName: repoName,
            buildCommand: buildCommand,
            mainBranch: mainBranch,
            period: Number(period),
        });
        try {
            execSync(`git clone ${repoName}`, {
                stdio: [0, 1, 2],
                cwd: path.resolve(__dirname, '../'),
            });
        } catch (error) {
            console.log(error);
        }
        return res.send(`New settings: ${response.config.data}`);
    } catch (err) {
        console.log(err);
    }
});

export default router;
