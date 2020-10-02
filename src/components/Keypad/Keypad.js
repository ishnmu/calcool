import React from "react";
import Button from "../../common/Button/Button";
import { KeypadWrapper } from "./Keypad.style";
import "./Key.style.css";

const Keypad = ({ keys, onPress }) => {
  return (
    <KeypadWrapper>
      {keys &&
        keys.map((item) => (
          <Button onClick={onPress} label={item} />
        ))}
    </KeypadWrapper>
  );
};

export default Keypad;
