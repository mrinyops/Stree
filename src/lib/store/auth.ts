import { create } from 'zustand';

import { createSelectors } from './utils';

// Define the possible auth states
export type AuthStatus = 'idle' | 'signedOut' | 'signedIn';

type AuthStore = {
  status: AuthStatus;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  restoreSession: () => Promise<void>;
};

// Zustand store
const useAuthBase = create<AuthStore>((set) => ({
  status: 'idle',

  signIn: async (email, password) => {
    console.log('Mock sign in:', email, password);
    // TODO: Replace with Supabase auth later
    set({ status: 'signedIn' });
  },

  signOut: async () => {
    set({ status: 'signedOut' });
  },

  restoreSession: async () => {
    // TODO: Replace with Supabase session check
    set({ status: 'signedOut' });
  },
}));

// Export with selector helpers
export const useAuth = createSelectors(useAuthBase);

// Convenience exports so barrel can re-export them
export const { signIn, signOut, restoreSession } = useAuthBase.getState();
