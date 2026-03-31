import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import BlockItem from './BlockItem';
import { useBlockStore } from '../useBlockStore';



const BlockList = ({ blocks }) => {
  const { reorderBlocks } = useBlockStore();
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;
    reorderBlocks(active.id, over.id);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={blocks.map((b) => b.id)}
        strategy={verticalListSortingStrategy}
      >
        {blocks.map((block) => (
          <BlockItem key={block.id} block={block} />
        ))}
      </SortableContext>
    </DndContext>
  );
};
export default BlockList;
