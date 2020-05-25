import { Application } from 'express';
import { AxiosInstance } from 'axios';

export interface IRoute {
    (
        app: Application,
        axiosInstance: AxiosInstance,
        baseURL: string,
        token: string
    ): void;
}
