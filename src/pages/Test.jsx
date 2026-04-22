import { Button } from '@/components/ui/button';
import BlockList from '@/features/block/components/BlockList';
import WorkspaceCreateDialog from '@/features/workspace/components/WorkspaceCreateDialog';
import { useNavigate } from 'react-router-dom';
import PageInfoJson from '@/routes/PageInfo.json';

const Test = () => {
  const navigate = useNavigate();
  const allPages =
    PageInfoJson['container']?.flatMap((item) => item?.urlList) ?? [];

  return (
    <div>
      {allPages.map((item, i) => (
        <Button
          className="block"
          key={item.id + i}
          onClick={() => navigate(item.url)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};
export default Test;
