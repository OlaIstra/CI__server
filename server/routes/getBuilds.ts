import { Request, Response } from 'express';

import { IRoute } from './interface';

export const getBuilds: IRoute = (app, axiosInstance, baseURL) => {
    app.get('/api/builds', (req: Request, res: Response): void => {
        axiosInstance
            .get(`${baseURL}api/build/list`)
            .then(response => {
                return res.send(response.data);
            })
            .catch(err => console.log(err));
    });
};

export const postBuild: IRoute = (app, axiosInstance, baseURL) => {
    app.post('/api/builds/:commitHash', (req: Request, res: Response): void => {
        axiosInstance
            .post(`${baseURL}api/build/request`, {
                commitMessage: 'string',
                commitHash: 'string',
                branchName: 'string',
                authorName: 'string',
            })
            .then(response => {
                return res.send(`Added build: ${response.config.data}`);
            })
            .catch(err => console.log(err));
    });
};

export const getCurrentBuild: IRoute = (app, axiosInstance, baseURL) => {
    app.get('/api/builds/:buildId', (req: Request, res: Response): void => {
        const { buildId } = req.params;

        axiosInstance
            .get(`${baseURL}api/build/details?buildId=${buildId}`)
            .then(response => res.send(response.data))
            .catch(err => console.log(err));
    });
};

export const getCurrentBuildLog: IRoute = (app, axiosInstance, baseURL) => {
    app.get(
        '/api/builds/:buildId/logs',
        (req: Request, res: Response): void => {
            const { buildId } = req.params;

            axiosInstance
                .get(`${baseURL}api/build/log?buildId=${buildId}`)
                .then(response => res.send(response.data))
                .catch(err => console.log(err));
        }
    );
};
