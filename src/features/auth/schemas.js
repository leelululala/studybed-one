import z from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(1, '이름을 입력하세요'),
    email: z
      .string()
      .email('올바른 이메일 형식이 아닙니다.')
      .regex(
        /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
        '올바른 이메일 형식이 아닙니다',
      ),
    password: z
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .regex(/[A-Z]/, '대문자를 포함해야 합니다')
      .regex(/[0-9]/, '숫자를 포함해야 합니다'),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });
