import create from 'zustand'
import { persist } from "zustand/middleware";

const useStore = create(persist(
    (set, get) => ({
        list: [],
        add: (item) => set({list: [item, ...get().list]})
    }), {
        name: "thoughts"
    }
))

export default useStore;