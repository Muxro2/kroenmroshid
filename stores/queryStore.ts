import { create } from 'zustand';

interface QueryState {
  collection: string;
  setCollection: (newCollection: string) => void
}

export const useQueryStore = create<QueryState>((set) => ({
  collection: 'coats',
  setCollection: (newCollection: string) => set({ collection: newCollection }),
}))