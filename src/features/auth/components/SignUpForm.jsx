import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../authSchema';
import { Field, FieldGroup } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import AuthCard from './AuthCard';
import FormField from '@/features/auth/components/FormField';
import { useSignUp } from '../useAuth';

const SignUpForm = () => {
  const { mutate: signUp, isPending } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema), mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log('[signup form] 서버로 보낼 데이터:', data);
    signUp(data);
  };

  return (
    <AuthCard
      title="Sign Up"
      description="회원가입을 위해 정보를 입력해주세요"
      footer={
        <Field className="grid grid-cols-2 gap-2">
          <Button type="button" variant="outline">
            취소
          </Button>
          <Button type="submit" form="form-signup" disabled={isPending}>
            회원가입
          </Button>
        </Field>
      }
    >
      <form
        id="form-signup"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <FieldGroup>
          <FormField
            id="name"
            fieldLabel="이름"
            register={register}
            error={errors.name}
          />
          <FormField
            id="email"
            fieldLabel="이메일"
            register={register}
            error={errors.email}
          />
          <FormField
            id="password"
            fieldLabel="비밀번호"
            register={register}
            error={errors.password}
            isPassword={true}
          />
          <FormField
            id="passwordConfirm"
            fieldLabel="비밀번호 재확인"
            register={register}
            error={errors.passwordConfirm}
            isPassword={true}
          />
        </FieldGroup>
      </form>
    </AuthCard>
  );
};

export default SignUpForm;
