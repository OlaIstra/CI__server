// import { Request, Response } from 'express';

// import { AppError } from '@shared/error/error';
// import { HttpCode } from '@shared/error/httpStatusCodes';
// import { findCurrentUrl } from './checkAllowRoute';

// // type AggregateDateFunctoin = (req: Request, res: Response) => StoreModels;

// export async function fetchAggregateStoreData(
//   req: Request,
//   res: Response,
//   data: any, // any => StoreAggregateData
// ): Promise<Partial<any>> { // any => StoreModels
//   const currentRoute = findCurrentUrl(data.url);

//   if (!currentRoute) {
//     throw new AppError('Route not found', HttpCode.NOT_FOUND);
//   }

//   const fetchFn = (await AGGREGATE_PAGE_ROUTES[currentRoute]) as any; // any => AggregateDateFunctoin ; что тут происходит?)))

//   return fetchFn(req, res);
// }
