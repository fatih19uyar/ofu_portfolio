// src/hooks/useFormHandler.ts

import { useForm, SubmitHandler, FieldValues, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface UseFormHandlerProps<T extends FieldValues> {
  defaultValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  validationSchema?: yup.ObjectSchema<any>;
}

const useFormHandler = <T extends FieldValues>({
  defaultValues,
  onSubmit,
  validationSchema,
}: UseFormHandlerProps<T>) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<T>({
    defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
    errors,
  };
};

export default useFormHandler;
