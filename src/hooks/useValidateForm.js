import {useState, useEffect} from 'react';

const useValidateForm = ({initialValue = {}, validate, onSubmit}) => {
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
  }, [isSubmitting, values, validate, errors, onSubmit]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues((prevValues) => ({...prevValues, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
  };

  const setFormValues = (name, newValues) => {
    setValues((p) => ({
      ...p,
      [name]: newValues,
    }));
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFormValues,
  };
};

export default useValidateForm;
