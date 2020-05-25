import { Request, Response } from 'express';

import { IRoute } from './interface';

export const getSettings: IRoute = (app, axiosInstance, baseURL, token) => {
    app.get('/api/settings', (req: Request, res: Response): void => {
        axiosInstance
            .get(`${baseURL}api/conf`)
            .then(response => {
                return res.send(response.data);
            })
            .catch(err => console.log(err));
    });
};

export const postSettings: IRoute = (app, axiosInstance, baseURL) => {
    app.post('/api/settings', (req: Request, res: Response): void => {
        axiosInstance
            .post(`${baseURL}api/conf`, {
                repoName: 'string',
                buildCommand: 'string',
                mainBranch: 'string',
                period: 0,
            })
            .then(response => {
                return res.send(`New settings: ${response.config.data}`);
            })
            .catch(err => console.log(err));
    });
};
