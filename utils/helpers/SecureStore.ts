import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { StateStorage } from "zustand/middleware";

export const storage: StateStorage =
  Platform.OS != "web"
    ? {
        getItem: async (name: string): Promise<string | null> => {
          return (await await SecureStore.getItemAsync(name)) || null;
        },
        setItem: async (name: string, value: string): Promise<void> => {
          await SecureStore.setItemAsync(name, value);
        },
        removeItem: async (name: string): Promise<void> => {
          await SecureStore.deleteItemAsync(name);
        },
      }
    : {
        getItem: async (name: string): Promise<string | null> => {
          return localStorage.getItem(name) || null;
        },
        setItem: async (name: string, value: string): Promise<void> => {
          await localStorage.setItem(name, value);
        },
        removeItem: async (name: string): Promise<void> => {
          await localStorage.removeItem(name);
        },
      };
