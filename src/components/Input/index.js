import React, { useEffect, useRef, useState, useCallback } from "react";

import { useField } from "@unform/core";
import { Container } from "./styles";

const Input = ({ name, containerStyle = {}, ...rest }) => {
  const imputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [insFocused, setIsfocused] = useState(false);
  const [insFilled, setinsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsfocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsfocused(false);

    setinsFilled(!!imputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: imputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      insFilled={insFilled}
      insFocused={insFocused}
    >
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        name={fieldName}
        ref={imputRef}
        {...rest}
      />
    </Container>
  );
};
export default Input;
