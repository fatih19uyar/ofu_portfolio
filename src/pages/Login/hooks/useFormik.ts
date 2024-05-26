// src/hooks/useFinalForm.ts

import { useState } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

interface FormData {
  [key: string]: string;
}

interface UseFormikFormProps {
  validationSchema: yup.ObjectSchema<any>;
}

const useFormik = ({ validationSchema }: UseFormikFormProps) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleFormChange = (fieldName: string, value: any) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  return {
    formData,
    handleFormChange,
    Formik,
    Field,
    validationSchema,
  };
};

export default useFormik;