import { APP_ROUTES, Routes } from '@shared/enums';

export const ALLOWED_ROUTES = APP_ROUTES;

// TODO: перенести
export function findCurrentUrl(url: string) {
    return ALLOWED_ROUTES.find((route: string) => {
        if (route === Routes.Home) return route === url;

        return new RegExp(`^${route}`).test(url);
    });
}

export function checkAllowRoute(url: string) {
    const findedRoute = findCurrentUrl(url);

    return Boolean(findedRoute);
}
