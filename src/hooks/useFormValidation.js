import { useState } from "react";

export function useFormValidation(initilalValues, validateFunc){
    const [values, setValues] = useState(initilalValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value } = e.target;
        setValues({...values, [name]:value});
    }
    const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    const validationErrors = validateFunc(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    };
    }
    const validateForm = () => {
        const validationErrors = validateFunc(values);
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };
   return {
    values,
    errors,
    handleChange,
    handleSubmit,
    validateForm ,
  };
}