import { Field, FieldLabel } from '@/components/ui/field';
import { Switch } from '@/components/ui/switch';
import { Controller } from 'react-hook-form';
const FormSwitch = ({ id, fieldLabel, control }) => {
  return (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="isTwoFa">{fieldLabel}</FieldLabel>
      <Controller
        control={control}
        name={id}
        render={({ field }) => (
          <Switch
            id="isTwoFa"
            checke={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      ></Controller>
    </Field>
  );
};
export default FormSwitch;
