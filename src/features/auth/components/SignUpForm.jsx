import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../schemas';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-80"
    >
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">이름</FieldLabel>
          <Input
            id="name"
            {...register('name')}
            placeholder="이름을 입력하세요."
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
            placeholder="비밀번호를 입력하세요."
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password && <FieldError errors={[errors.password]} />}
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            취소
          </Button>
          <Button type="submit">회원가입</Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default SignUpForm;
