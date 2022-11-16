import create from "zustand";
import { PageName } from "../pages";

interface NavState {
  page: PageName;
  setPage: (page: PageName) => void;
}

export const useNavStore = create<NavState>((set) => ({
  page: "introduction",
  setPage: (page: PageName) => set({ page }),
}));
