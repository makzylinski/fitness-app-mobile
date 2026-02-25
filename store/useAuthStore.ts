import { create } from "zustand";

type User = {
  // TODO change it and export
  email: string;
};

type AuthState = {
  user: User | null;
  login: (name: any) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (userObj: User) => set({ user: userObj }),
  logout: () => set({ user: null }),
}));
