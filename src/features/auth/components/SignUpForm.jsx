import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../schemas/authSchema';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import AuthCard from './AuthCard';
import FormField from '@/features/auth/components/FormField';
import { useSignUp } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { mutate: signUp, isPending } = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
    defaultValues: { isTwoFa: false, isFido: false },
  });

  const onSubmit = (data) => {
    console.log('[signup form] 서버로 보낼 데이터:', data);
    console.log('is Pending: ', isPending);
    signUp(data);
  };

  return (
    <AuthCard
      title="나만의 워크스페이스"
      description="이메일로 가입"
      footer={
        <Field className="grid grid-cols-2 gap-2">
          <Button type="button" variant="outline">
            취소
          </Button>
          <Button
            type="submit"
            form="form-signup"
            disabled={isPending || !isValid}
          >
            회원가입
          </Button>
        </Field>
      }
      linkText="Existing User?"
      linkButtonText="Log in"
      onLinkClick={() => navigate('/login')}
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
          <Field orientation="horizontal">
            <FieldLabel htmlFor="isTwoFa">MFA 인증 여부</FieldLabel>
            <Controller
              name="isTwoFa"
              control={control}
              render={({ field }) => (
                <Switch
                  id="isTwoFa"
                  checked={field.value}
                  onCheckedChange={field.onChange} // ← d 추가
                />
              )}
            />
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="isFido">생체인증 사용 여부</FieldLabel>
            <Controller
              name="isFido"
              control={control}
              render={({ field }) => (
                <Switch
                  id="isFido"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
          </Field>
        </FieldGroup>
      </form>
    </AuthCard>
  );
};

export default SignUpForm;
