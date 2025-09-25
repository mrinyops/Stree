import { create } from 'zustand';

// Small helper to generate selector hooks
const createSelectors = <S extends object>(store: any) => {
  const use = {} as {
    [K in keyof S]: () => S[K];
  };
  for (const k of Object.keys(store.getState())) {
    // @ts-ignore
    use[k] = () => store((s: S) => s[k]);
  }
  return { ...store, use };
};

type Status = 'idle' | 'signedIn' | 'signedOut';

interface AuthState {
  status: Status;
  user: any | null;
  signIn: () => void;
  signOut: () => void;
  restoreSession: () => void;
}

// Base Zustand store
export const useAuthStore = create<AuthState>((set) => ({
  status: 'idle', // ✅ start in idle so splash shows first
  user: null,

  signIn: () =>
    set({
      status: 'signedIn',
      user: { id: 'demo-user', email: 'demo@stree.app' },
    }),

  signOut: () =>
    set({
      status: 'signedOut',
      user: null,
    }),

  restoreSession: () => {
    // Simulate async restore (e.g., from Supabase or storage)
    setTimeout(() => {
      // For now, always fallback to signedOut
      set({ status: 'signedOut', user: null });
    }, 500); // small delay so splash is visible
  },
}));

// ✅ Selector API wrapper
export const useAuth = createSelectors(useAuthStore);
