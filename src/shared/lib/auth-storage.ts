import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LoginResponse, UserMeResponse } from "@/src/shared/lib/types";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  user: UserMeResponse | null;
  hydrated: boolean;
  setTokens: (tokens: LoginResponse) => void;
  setUser: (user: UserMeResponse | null) => void;
  clear: () => void;
  setHydrated: (value: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      user: null,
      hydrated: false,
      setTokens: (tokens) =>
        set({
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        }),
      setUser: (user) => set({ user }),
      clear: () =>
        set({
          accessToken: null,
          refreshToken: null,
          user: null,
        }),
      setHydrated: (value) => set({ hydrated: value }),
    }),
    {
      name: "paraf-auth",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);

export function getAuthToken() {
  return useAuthStore.getState().accessToken;
}

