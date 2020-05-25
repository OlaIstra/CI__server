import { Request, Response } from 'express';
import { IRoute } from './interface';

export const getBuilds: IRoute = (app, axiosInstance, baseURL, token) => {
    app.get('/api/builds', (req: Request, res: Response): void => {
        axiosInstance
            .get(`${baseURL}api/build/list`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(response => {
                return res.send(response.data);
            })
            .catch(err => console.log(err));
    });
};
