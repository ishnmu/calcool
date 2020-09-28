import React from "react";
import Keypad from "../Keypad/Keypad";
import Screen from "../Screen/Screen";
import { CalculatorWrapper } from "./Calculator.style";

const Calculator = () => {
  const [result, setResult] = React.useState(0);
  const data = [
    {
      label: "C",
      onClick: () => console.info("clicked", "C"),
    },
    {
      label: "+/-",
      onClick: () => console.info("clicked", "+/-"),
    },
    {
      label: "%",
      onClick: () => console.info("clicked", "%"),
    },
    {
      label: "÷",
      onClick: () => console.info("clicked", "÷"),
    },
    {
      label: 1,
      onClick: () => console.info("clicked", 1),
    },
    {
      label: 2,
      onClick: () => console.info("clicked", 2),
    },
    {
      label: 3,
      onClick: () => console.info("clicked", 3),
    },
    {
      label: "x",
      onClick: () => console.info("clicked", "x"),
    },
    {
      label: 4,
      onClick: () => console.info("clicked", 4),
    },
    {
      label: 5,
      onClick: () => console.info("clicked", 5),
    },
    {
      label: 6,
      onClick: () => console.info("clicked", 6),
    },
    {
      label: "-",
      onClick: () => console.info("clicked", "-"),
    },
    {
      label: 7,
      onClick: () => console.info("clicked", 7),
    },
    {
      label: 8,
      onClick: () => console.info("clicked", 8),
    },
    {
      label: 9,
      onClick: () => console.info("clicked", 9),
    },
    {
      label: "+",
      onClick: () => console.info("clicked", "+"),
    },
    {
      label: 0,
      onClick: () => console.info("clicked", 0),
    },
    {
      label: ".",
      onClick: () => console.info("clicked", "."),
    },
    {
      label: "=",
      onClick: () => console.info("clicked", "="),
    },
  ];
  return (
    <CalculatorWrapper>
      <Screen data={result} />
      <Keypad data={data} />
    </CalculatorWrapper>
  );
};

export default Calculator;
