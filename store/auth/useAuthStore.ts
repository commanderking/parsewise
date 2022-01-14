import create from "zustand";
import firebase from "store/auth/firebase";

export type AuthStore = {
  hasLoadedUser: boolean;
  user: firebase.User | null;

  setUser: (user: firebase.User) => void;
  setHasLoadedUser: (hasLoadedUser: boolean) => void;
  signOut: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  hasLoadedUser: false,
  user: null,

  // Functions to update store
  setUser: (user) => set({ user }),
  setHasLoadedUser: (hasLoadedUser) => set({ hasLoadedUser }),
  signOut: async () => {
    await firebase.auth().signOut();
  },
}));
