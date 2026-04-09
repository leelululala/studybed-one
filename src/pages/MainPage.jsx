import BlockList from '@/features/block/components/BlockList';
import WorkspaceCreateDialog from '@/features/workspace/components/WorkspaceCreateDialog';
const blocks = [
  { id: '1', content: '블록1', type: 'page' },
  { id: '2', content: '블록2', type: 'page' },
  { id: '3', content: '블록3', type: 'page' },
];
const MainPage = () => {
  return (
    <div>
      <WorkspaceCreateDialog />
      <BlockList blocks={blocks} />
    </div>
  );
};
export default MainPage;
