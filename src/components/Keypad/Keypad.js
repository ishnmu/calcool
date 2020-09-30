import React from "react";
import Button from "../../common/Button/Button";
import { KeypadWrapper } from "./Keypad.style";
import "./Key.style.css";

const Keypad = ({ data }) => {
  return (
    <KeypadWrapper>
      {data &&
        data.map((item) => (
          <Button onClick={item.onClick} label={item.label} />
        ))}
    </KeypadWrapper>
  );
};

export default Keypad;
