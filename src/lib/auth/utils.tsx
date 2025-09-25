import { getItem, removeItem, setItem } from '@/lib/storage';

export type TokenType = {
  accessToken: string;
  refreshToken?: string;
};

const TOKEN_KEY = 'token';

export function getToken(): TokenType | null {
  return getItem<TokenType>(TOKEN_KEY);
}

export function setToken(token: TokenType) {
  return setItem<TokenType>(TOKEN_KEY, token);
}

export function removeToken() {
  return removeItem(TOKEN_KEY);
}
