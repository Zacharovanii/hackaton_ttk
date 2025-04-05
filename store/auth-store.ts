import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
	token: string | null;
	isAuthenticated: boolean;
	setToken: (token: string | null) => void;
	setAuthenticated: (value: boolean) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			isAuthenticated: false,
			setToken: (token) => set({ token: token }),
			setAuthenticated: (value) => set({ isAuthenticated: value }),
			logout: () => set({ token: null, isAuthenticated: false }),
		}),
		{
			name: "auth-storage",
		}
	)
);
