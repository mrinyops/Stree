import { create } from 'zustand';

import { createSelectors } from '@/lib/utils';

import { getToken, removeToken, setToken, type TokenType } from './utils';

interface AuthState {
  token: TokenType | null;
  status: 'idle' | 'signIn' | 'signOut';
  signIn: (data: TokenType) => void;
  signOut: () => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  token: null,
  status: 'idle',

  signIn: (token) => {
    setToken(token);
    set({ status: 'signIn', token });
  },

  signOut: () => {
    removeToken();
    set({ status: 'signOut', token: null });
  },

  hydrate: () => {
    try {
      const t = getToken();
      if (t) get().signIn(t);
      else get().signOut();
    } catch {
      get().signOut();
    }
  },
}));

export const useAuth = createSelectors(_useAuth);
export const hydrateAuth = () => _useAuth.getState().hydrate();
