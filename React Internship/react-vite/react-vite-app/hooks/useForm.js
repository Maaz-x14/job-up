import { useState } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((state) => ({
        // If i change value of an input field, then it would not get the other input w/o using ...state
      ...state,   // This is used to set the previous state of form, whenever an input field is changed it runs
      [name]: value,
    }));
  };

  const resetForm = () => setValues(initialValues);

  return { values, handleChange, resetForm };
}
