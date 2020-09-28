import React from "react";
import { StyledButton } from "./Button.style.js";

const Button = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
