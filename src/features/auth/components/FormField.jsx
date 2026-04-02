import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

const FormField = ({ id, fieldLabel, register, error }) => (
  <Field>
    <FieldLabel htmlFor={id}>{fieldLabel}</FieldLabel>
    <Input id={id} {...register(id)} aria-invalid={error ? 'true' : 'false'} />
    {error && <FieldError errors={[error]} />}
  </Field>
);
export default FormField;
