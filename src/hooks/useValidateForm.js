import { useState, useEffect, useCallback, useMemo } from 'react';

const useValidateForm = ({ initialValue = {}, validate, onSubmit }) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        onSubmit?.(values);
      }
      setIsSubmitting(false);
    }
  }, [isSubmitting, values, errors, validate, onSubmit]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);
      setIsSubmitting(true);
    },
    [validate, values]
  );

  const setFormValues = useCallback((name, newValues) => {
    setValues((p) => ({
      ...p,
      [name]: newValues,
    }));
  }, []);

  const returnAction = useMemo(
    () => ({
      values,
      errors,
      handleChange,
      handleSubmit,
      setFormValues,
    }),
    [errors, handleChange, handleSubmit, setFormValues, values]
  );

  return returnAction;
};

export default useValidateForm;
