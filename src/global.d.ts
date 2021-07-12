import RootStore from '@core/store/rootStore';

declare global {
    interface Window {
        __INITIAL_STATE__: RootStore;
    }
}
