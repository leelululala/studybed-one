import BlockList from '@/features/block/components/BlockList';
const blocks = [
  { id: '1', content: '블록1', type: 'page' },
  { id: '2', content: '블록2', type: 'page' },
  { id: '3', content: '블록3', type: 'page' },
];
const MainPage = () => {
  return <BlockList blocks={blocks} />;
};
export default MainPage;
