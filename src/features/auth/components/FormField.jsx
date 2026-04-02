import { Field, FieldLabel, FieldError } from '@/components/ui/field';

const FormField = ({ id, error }) => (
  <Field>
    <FieldLabel htmlFor={id}>이름</FieldLabel>
    <Input id={id} {...register(id)} aria-invalid={error ? 'true' : 'false'} />
    {error && <FieldError errors={[error]} />}
  </Field>
);
export default FormField;
