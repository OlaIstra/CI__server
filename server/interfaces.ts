import { Request, Response } from 'express';

import { IBuild } from './components/builds/interfaces';

export interface IState {
    builds: Array<IBuild>;
}

export type AsyncRequestHandler = (
    req: Request,
    res: Response
) => Promise<Response>;
