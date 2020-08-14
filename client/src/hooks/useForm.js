import { useLocalStorage } from "./useLocalStorage";

const useForm = (initialValue, cb) => {
  const [values, setValues] = useLocalStorage("plantData", initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage(
    "success",
    initialValue
  );
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

  return [values, handleSubmit, handleChanges];
};

export default useForm;
