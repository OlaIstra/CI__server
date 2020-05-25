import { Request, Response } from 'express';
import { IRoute } from './interface';

export const getCurrentBuild: IRoute = (app, axiosInstance, baseURL, token) => {
    app.get('/api/builds/:buildId', (req: Request, res: Response): void => {
        const { buildId } = req.params;

        axiosInstance
            .get(`${baseURL}api/build/details?buildId=${buildId}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(response => res.send(response.data))
            .catch(err => console.log(err));
    });
};
