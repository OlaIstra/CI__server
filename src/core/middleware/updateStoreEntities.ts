import { runInAction } from 'mobx';
import { StoreKey } from '@shared/enums';
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export function updateStoreEntities(store: any, entities?: any) {
    // any => Store / StoreModels
    if (!entities) return;

    runInAction(() => {
        (Object.keys(entities) as StoreKey[]).forEach(key => {
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            const entity = entities[key]!;

            Object.keys(entity).forEach(id => {
                store.set(key, id, entity[id]);
            });
        });
    });
}
