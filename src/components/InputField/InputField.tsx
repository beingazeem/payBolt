import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { signUpFormSchema } from '@/modules/SignUp';
import { loginFormSchema } from '@/modules/Login';
import { AnyType } from '@shared/formHandler';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@shared/ui/form';
import { Input } from '@shared/ui/input';
import { Label } from '@shared/ui/label';
import { cn } from '@shared/utils';

interface SignupFormFieldProps {
  name: FieldPath<z.infer<typeof signUpFormSchema | typeof loginFormSchema>>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  formControl: Control<AnyType>;
  error?: string;
}

export const InputField = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
}: SignupFormFieldProps) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Label className="text-sm font-sans ">{label}</Label>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || 'text'}
              {...field}
              className={cn('px-2', {
                'outline-destructive': !!formControl.getFieldState(field.name)
                  .error,
              })}
            />
          </FormControl>
          {description && (
            <FormDescription className="text-red">
              {description}
            </FormDescription>
          )}
          <FormMessage className="text-destructive" />
        </FormItem>
      )}
    />
  );
};
