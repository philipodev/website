import create from "zustand";

interface NavState {
  page: string;
  setPage: (page: string) => void;
}

export const useNavStore = create<NavState>((set) => ({
  page: "introduction",
  setPage: (page: string) => set({ page }),
}));
