import create from "zustand";
import { persist } from "zustand/middleware";
import updateObject from "../lib/updateObject";

const useStore = create(
  persist(
    (set, get) => ({
      list: [],
      exists: (item) => get().list.findIndex((obj) => obj.key === item.key),
      add: (item) => set({ list: [item, ...get().list] }),
      delete: (key) => set({ list: get().list.filter((el) => el.key !== key) }),
      update: (element) => set({ list: updateObject(element, get().list) }),
      clearAll: () => set({ list: [] }),
    }),
    {
      name: "thoughts",
    }
  )
);

export default useStore;
