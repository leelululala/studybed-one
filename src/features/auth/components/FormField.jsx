import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const FormField = ({ id, fieldLabel, register, error, isPassword }) => (
  <Field>
    <FieldLabel htmlFor={id}>{fieldLabel}</FieldLabel>
    <Input
      id={id}
      {...register(id)}
      aria-invalid={error ? 'true' : 'false'}
      type={isPassword ? 'password' : ''}
    />
    {error && <FieldError errors={[error]} />}
  </Field>
);
export default FormField;
