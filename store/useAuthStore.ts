import { create } from "zustand";

type AuthState = {
  user: any;
  login: (name: any) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (userObj) => set({ user: userObj }),
  logout: () => set({ user: null }),
}));
