import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import BlockContent from './BlockContent';
import { GripVertical } from 'lucide-react';

const BlockItem = ({ block }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: block.id });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className="flex items-center gap-1"
    >
      <span {...listeners} {...attributes}>
        <GripVertical size={10} />
      </span>
      <BlockContent block={block} />
    </div>
  );
};

export default BlockItem;
