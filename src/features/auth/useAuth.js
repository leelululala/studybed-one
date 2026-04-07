import { useMutation } from '@tanstack/react-query';
import { signUp } from './authApi';

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      console.log('회원가입 성공');
    },
    onError: (error) => {
      console.log('회원가입 실패: ', error);
    },
  });
};
