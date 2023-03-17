import { useState } from "react";

const useSampleInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && isFocused;

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurhandler = () => {
    setIsFocused(true);
  };

  const reset = () => {
    setValue("");
    setIsFocused(false);
  };

  return {
    value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurhandler,
    reset,
  };
};

export default useSampleInput;
