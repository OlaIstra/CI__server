export enum IEndpoints {
    Settings = 'api/settings',
    Builds = 'api/builds',
}

export enum Routes {
    Home = '/',
    Settings = '/settings',
    Builds = '/builds',
    History = '/history',
}

export const APP_ROUTES = [Routes.Home, Routes.Settings, Routes.Builds, Routes.History];

// export const AGGREGATE_PAGE_ROUTES = { // все... запуталась
//     [Routes.Home]: JobRoute,
//     [Routes.Settings]: JobRoute,
//     [Routes.Builds]: JobsRoute,
//     [Routes.History]: SettingsRoute,
// };

export enum StoreKey {
    Settings = 'settings',
    Builds = 'builds',
}

// export enum RequestMethod {
//     Get = 'GET',
//     Post = 'POST',
//     Delete = 'DELETE',
//     Put = 'PUT',
//     Patch = 'PATCH',
//   }

//   export interface ApiModels {
//     [StoreKey.Settings]: SettingsModel;
//     [StoreKey.Builds]: JobModel;
//   }

// export type StoreModels = Partial<
//   {
//     [key in StoreKey]: Dict<ApiModels[key]>;
//   }
// >;
