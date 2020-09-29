import React from "react";
import Keypad from "../Keypad/Keypad";
import Screen from "../Screen/Screen";
import { CalculatorWrapper } from "./Calculator.style";

const Calculator = () => {
  const [result, setResult] = React.useState("");
  const data = [
    {
      label: "C",
      onClick: () => result && setResult(""),
    },
    {
      label: "+/-",
      onClick: () =>
        result &&
        setResult(
          parseInt(result) > 0 ? `-${result}` : Math.abs(result).toString()
        ),
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
      onClick: () => setResult(result ? result + "1" : "1"),
    },
    {
      label: 2,
      onClick: () => setResult(result ? result + "2" : "2"),
    },
    {
      label: 3,
      onClick: () => setResult(result ? result + "3" : "3"),
    },
    {
      label: "x",
      onClick: () => console.info("clicked", "x"),
    },
    {
      label: 4,
      onClick: () => setResult(result ? result + "4" : "4"),
    },
    {
      label: 5,
      onClick: () => setResult(result ? result + "5" : "5"),
    },
    {
      label: 6,
      onClick: () => setResult(result ? result + "6" : "6"),
    },
    {
      label: "-",
      onClick: () => console.info("clicked", "-"),
    },
    {
      label: 7,
      onClick: () => setResult(result ? result + "7" : "7"),
    },
    {
      label: 8,
      onClick: () => setResult(result ? result + "8" : "8"),
    },
    {
      label: 9,
      onClick: () => setResult(result ? result + "9" : "9"),
    },
    {
      label: "+",
      onClick: () => console.info("clicked", "+"),
    },
    {
      label: 0,
      onClick: () => setResult(result ? `${result} + 0` : "0"),
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
