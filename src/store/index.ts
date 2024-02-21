import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User } from '../interfaces/user.ts';

export interface State {
  user: null | User;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  setUser: (user: User | null) => void;
}

export const useAuthState = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setIsAuthenticated: (value: boolean) => set(() => ({ isAuthenticated: value })),
      setUser: (user: User) => set(() => ({ user }))
    }),
    {
      name: 'auth-storage', // unique name
      storage: createJSONStorage(() => localStorage) // use localStorage
    }
  )
);