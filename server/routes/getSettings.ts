import { Request, Response } from 'express';
import { IRoute } from './interface';

export const getSettings: IRoute = (app, axiosInstance, baseURL, token) => {
    app.get('/api/settings', (req: Request, res: Response): void => {
        axiosInstance
            .get(`${baseURL}api/conf`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(response => {
                return res.send(response.data);
            })
            .catch(err => console.log(err));
    });
};
