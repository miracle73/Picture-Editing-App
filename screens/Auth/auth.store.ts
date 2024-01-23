import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "../../utils/helpers/SecureStore";

type AuthState = {
  userToken: any;
  setUserToken: (userToken: any) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userToken: null,
      setUserToken: (userToken) => set(() => ({ userToken })),
    }),
    {
      name: "userToken",
      storage: createJSONStorage(() => storage),
      partialize: (state) => ({ userToken: state.userToken }),
    }
  )
);

// storage: createJSONStorage(() => Asyn),
