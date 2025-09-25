import type { StoreApi, UseBoundStore } from 'zustand';

export function createSelectors<S extends object>(
  store: UseBoundStore<StoreApi<S>>
) {
  const useStore = store as any;
  useStore.use = {};
  for (const k of Object.keys(store.getState())) {
    (useStore.use as any)[k] = () => store((s: any) => s[k]);
  }
  return useStore as typeof store & { use: { [K in keyof S]: () => S[K] } };
}
