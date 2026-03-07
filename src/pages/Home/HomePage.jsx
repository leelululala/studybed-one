import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <p>스터디베트 1기 프로젝트 홈화면</p>
      <Button
        onClick={() => {
          navigate('/dashboard');
        }}
        variant="outline"
      >
        게시판
      </Button>
    </div>
  );
};

export default HomePage;
