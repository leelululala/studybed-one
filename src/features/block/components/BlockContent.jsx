import PageContent from '@/features/page/components/PageContent';

const BlockContent = ({ block }) => {
  switch (block.type) {
    case 'page':
      return <PageContent block={block} />;
    default:
      return null;
  }
};

export default BlockContent;
