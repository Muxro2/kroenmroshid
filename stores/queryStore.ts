import { create } from 'zustand';

interface QueryStore {
  collection: string;
  setCollection: (newCollection: string) => void;
}

export const useQueryStore = create<QueryStore>((set) => ({
  collection: '',
  setCollection: (newCollection: string) => set({ collection: newCollection }),
}))