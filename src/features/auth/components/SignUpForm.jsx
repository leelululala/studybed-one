import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../schemas';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AuthCard from './AuthCard';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema), mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log('[signup form] 서버로 보낼 데이터:', data);
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
          <Button type="submit" form="form-signup">
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
          <Field>
            <FieldLabel htmlFor="name">이름</FieldLabel>
            <Input
              id="name"
              {...register('name')}
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && <FieldError errors={[errors.name]} />}
          </Field>
          <Field>
            <FieldLabel htmlFor="email">이메일</FieldLabel>
            <Input
              id="email"
              {...register('email')}
              type="email"
              placeholder="example@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && <FieldError errors={[errors.email]} />}
          </Field>
          <Field>
            <FieldLabel htmlFor="password">비밀번호</FieldLabel>
            <Input
              id="password"
              {...register('password')}
              type="password"
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && <FieldError errors={[errors.password]} />}
          </Field>
          <Field>
            <FieldLabel htmlFor="passwordConfirm">비밀번호 재확인</FieldLabel>
            <Input
              id="passwordConfirm"
              {...register('passwordConfirm')}
              type="password"
              aria-invalid={errors.passwordConfirm ? 'true' : 'false'}
            />
            {errors.passwordConfirm && (
              <FieldError errors={[errors.passwordConfirm]} />
            )}
          </Field>
        </FieldGroup>
      </form>
    </AuthCard>
  );
};

export default SignUpForm;
