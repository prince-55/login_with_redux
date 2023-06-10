import { useState } from "react";
import  Classes from './../styles/formInput.module.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={Classes.formInput}>
      <label className={Classes.label}>{label}</label>
      <input
        className={Classes.input}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className={Classes.span}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;