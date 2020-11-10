import { ISettings } from '@shared/interfaces/settings';

declare global {
    interface Window {
        __INITIAL_STATE__: ISettings;
    }
}
