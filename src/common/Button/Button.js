import React from "react";
import { StyledButton } from "./Button.style.js";

const Button = ({ label, onClick }) => {
  const onClickHandler = ({target}) => onClick(target.value)
  return (
    <StyledButton
      onClick={onClickHandler}
      value={label}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
