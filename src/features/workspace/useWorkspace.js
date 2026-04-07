import { create } from 'zustand';

const useWorkspace = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isOpenModal: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useWorkspace;
