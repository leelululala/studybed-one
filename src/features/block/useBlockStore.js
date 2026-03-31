import { create } from 'zustand';
import { generateKeyBetween } from 'fractional-indexing';

export const useBlockStore = create((set, get) => ({
  selectedBlockId: null,
  setSelectedBlockId: (id) => set({ selectedBlockId: id }),

  draggingBlockId: null,
  setDraggingBlockId: (id) => set({ draggingBlockId: id }),

  reorderBlocks: (activeId, overId, blocks) => {
    const activeIndex = blocks.findIndex((b) => b.id === activeId);
    const overIndex = blocks.findIndex((b) => b.id === overId);

    const prevBlock = blocks[overIndex - 1];
    const nextBlock = blocks[overIndex];

    const newOrder = generateKeyBetween(
      prevBlock?.order ?? null,
      nextBlock?.order ?? null,
    );

    return newOrder;
  },
}));
