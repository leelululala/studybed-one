import ApiUtils from '@/utils/ApiUtils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { House, Building2 } from 'lucide-react';
import CreationOptionButton from './CreationOptionButton';

const WorkspaceCreateDialog = () => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: () => {
      console.log('워크스페이스 생성');
    },
    onSuccess: () => {
      console.log('생성 완료');
      queryClient.invalidateQueries({ queryKey: ['workspace'] });
    },
    onError: (error) => {
      console.error('생성 실패: ', error);
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">새 워크스페이스</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle> 이 워크스페이스의 용도</DialogTitle>
          <DialogDescription>
            몇 단계만 더 진행하면 새로운 워크스페이스를 이용할 수 있습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1">
          <CreationOptionButton
            icon={House}
            title="개인용"
            description="더 나은 글쓰기, 더 명확한 사고, 그리고 체계적인 정리"
            onClick={() => createMutation.mutate()}
          />
          <CreationOptionButton
            icon={Building2}
            title="업무용"
            description="프로젝트, 회사 목표, 회의 노트 추적"
            onClick={() => createMutation.mutate()}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkspaceCreateDialog;
