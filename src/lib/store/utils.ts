// src/lib/store/utils.ts
export const createSelectors = <S extends object>(store: any) => {
  const useStore = store;
  (useStore as any).use = {};
  for (const k of Object.keys(store.getState())) {
    (useStore as any).use[k] = () => store((s: S) => (s as any)[k]);
  }
  return useStore;
};
