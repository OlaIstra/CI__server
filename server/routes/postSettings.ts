import { Request, Response } from 'express';
import { IRoute } from './interface';

export const postSettings: IRoute = (app, axiosInstance, baseURL, token) => {
    app.post('/api/settings', (req: Request, res: Response): void => {
        axiosInstance
            .post(
                `${baseURL}api/conf`,
                {
                    repoName: 'string',
                    buildCommand: 'string',
                    mainBranch: 'string',
                    period: 0,
                },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(response => {
                return res.send(`New settings: ${response.config.data}`);
            })
            .catch(err => console.log(err));
    });
};
