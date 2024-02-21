import { AUTHORIZATION_KEY } from '../constants/jwt.ts';
import { JwtDecode } from '../interfaces/jwt';
import { jwtDecode } from 'jwt-decode';
import { LoginResponse } from '../interfaces/axios.ts';

export const decodeJwt = (token: string): JwtDecode => {
  const jwtDecoded: never = jwtDecode(token);
  let res = {};
  Object.keys(jwtDecoded).forEach(function (key) {
    const spitProperty: string[] = key.split('/claims/');
    const splitPropetyLenth: number = spitProperty.length;
    res = {
      ...res,
      [splitPropetyLenth == 1 ? key : spitProperty[splitPropetyLenth - 1]]: jwtDecoded[key]
    };
  });
  return res as JwtDecode;
};

export const setAuth = (auth: LoginResponse): void => {
  localStorage.setItem(AUTHORIZATION_KEY, auth.token!);
};

export const setJwt = (token: string | null): void => {
  if (token) {
    localStorage.setItem(AUTHORIZATION_KEY, token);
  } else {
    localStorage.removeItem(AUTHORIZATION_KEY);
  }
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem(AUTHORIZATION_KEY);
};

export const getJwt = (): string | null => {
  return localStorage.getItem(AUTHORIZATION_KEY);
};


export const logout = (): void => {
  // localStorage.removeItem(AUTHORIZATION_KEY);
  window.location.replace('/login');
};
