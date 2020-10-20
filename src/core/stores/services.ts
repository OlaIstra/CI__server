import { createContext, useContext } from 'react';

import { Store } from './store';

export const StoreContext = createContext<null | Store>(null);
export const store = new Store();

export const useStore = () => useContext(StoreContext);
