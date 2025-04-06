import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
	token: string | null;
	isAuthenticated: boolean;
	setToken: (token: string | null) => void;
	setAuthenticated: (value: boolean) => void;
	logout: () => void;
	email: string;
	setEmail: (email: string) => void;
	password: string;
	setPassword: (password: string) => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			isAuthenticated: false,
			setToken: (token) => set({ token: token }),
			setAuthenticated: (value) => set({ isAuthenticated: value }),
			logout: () => set({ token: null, isAuthenticated: false }),
			email: "",
			setEmail: (email) => set({ email: email }),
			password: "",
			setPassword: (password) => set({ password: password }),
		}),
		{
			name: "auth-storage",
		}
	)
);
