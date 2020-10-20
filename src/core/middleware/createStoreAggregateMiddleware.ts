// import { Store } from '@core/stores/store';
// import { Routes } from '@shared/enums';
// import { Request, Response } from 'express';
// import { fetchAggregateStoreData } from './fetchAggregateStoreData';
// import { updateStoreEntities } from './updateStoreEntities';

// export interface StoreAggregateData {
//   store: Store;
//   url: Routes;

// }

// export function createStoreAggregateMiddleware(store: Store) {
//   return async (req: Request, res: Response) => {
//     const promises: Promise<void>[] = [];

//     const commonData = { store };

//     const load = async () => {
//       try {
//         const data: StoreAggregateData = {
//           ...commonData,
//           url: req.url as Routes,
//         };

//         const result = await fetchAggregateStoreData(req, res, data);

//         updateStoreEntities(store, result);
//       } catch (error) {
//         // ToDo error
//       }
//     };

//     promises.push(load());

//     await Promise.all(promises);
//   };
// }
