import { useCallback } from 'react';
import { z } from 'zod';
import { useForm, Path, DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnyType } from '@shared/formHandler/types';

type FormValues = Record<string, AnyType>;

interface FormProps<T extends FormValues> {
  schema?: z.ZodType<T>;
  initialValues: T;
}

export const useHandleForm = <T extends FormValues>({
  schema,
  initialValues,
}: FormProps<T>) => {
  const form = useForm({
    resolver: schema && zodResolver(schema),
    defaultValues: initialValues as DefaultValues<T>,
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
    clearErrors,
    trigger,
    unregister,
    formState: { errors, isSubmitting, submitCount, isDirty },
  } = form;

  const setValues = useCallback(
    (data: DefaultValues<T>) => {
      reset(data);
    },
    [reset],
  );

  const validate = (fieldName: Path<T>) => {
    if (fieldName) {
      trigger(fieldName);
      clearErrors(fieldName);
    } else {
      trigger();
    }
  };

  const setValidateData = (name: Path<T>, value: AnyType) => {
    setValue(name, value, { shouldValidate: true });
  };

  return {
    control,
    handleSubmit,
    values: watch(),
    setValue,
    reset,
    errors,
    register,
    setValues,
    clearErrors,
    trigger,
    validate,
    getValues,
    setValidateData,
    isSubmitting,
    submitCount,
    isDirty,
    unregister,
    form,
  };
};
