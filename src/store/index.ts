import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User } from '../interfaces/user.ts';

interface State {
  token: string | null;
  user: null | User;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
}

export const useAuthState = create(
  persist(
    (set) => ({
      token: null,
      user: null,
      setUser: (user: User | null) => set(() => ({ user })),
      setToken: (token: string | null) => set(() => ({ token }))
    }),
    {
      name: 'Authorization',
      storage: createJSONStorage(() => localStorage),
      partialize: (state: State) => ({ token: state.token })
    }
  )
);
