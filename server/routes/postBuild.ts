import { Request, Response } from 'express';
import { IRoute } from './interface';

export const postBuild: IRoute = (app, axiosInstance, baseURL, token) => {
    app.post('/api/builds/:commitHash', (req: Request, res: Response): void => {
        axiosInstance
            .post(
                `${baseURL}api/build/request`,
                {
                    commitMessage: 'string',
                    commitHash: 'string',
                    branchName: 'string',
                    authorName: 'string',
                },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            .then(response => {
                return res.send(`Added build: ${response.config.data}`);
            })
            .catch(err => console.log(err));
    });
};
