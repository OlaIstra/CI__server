import { useContext } from 'react';

import RootStore from '../rootStore';
import { StoreContext } from './storeContext.ts';

export const useStores = () => useContext<RootStore>(StoreContext);
