import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

const useForm = (initialValue) => {
  const [values, setValues] = useLocalStorage("plantData", initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [values, showSuccessMessage, handleSubmit, handleChanges];
};

export default useForm;
