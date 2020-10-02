import React from "react";
import Keypad from "../Keypad/Keypad";
import Screen from "../Screen/Screen";
import { CalculatorWrapper, Section } from "./Calculator.style";

const Calculator = () => {
  const [result, setResult] = React.useState("");
  const [otherOperant, setOtherOperant] = React.useState("");
  const [waitingForOperant, setWaitingForOperant] = React.useState(false);
  const [selectedOperator, setSelectedOperator] = React.useState("");
  const OPERATORS = ["%", "/", "x", "-", "+", "="];
  const DELETE = ["AC", "C"];
  const onClearAll = () => {
    setResult("");
    setOtherOperant("");
    setWaitingForOperant(false);
    setSelectedOperator("");
  };
  const onClear = () => {
    if (!waitingForOperant) {
      return result && setResult(result.slice(0, result.length - 1));
    } else {
      return (
        otherOperant &&
        setOtherOperant(otherOperant.slice(0, otherOperant.length - 1))
      );
    }
  };
  const isOperator = (key) => OPERATORS.includes(key);
  const isDelete = (key) => DELETE.includes(key);
  const isAC = (key) => key === "AC";
  const isDot = (key) => key === ".";
  const isEqual = (key) => key === "=";
  const evaluate = (op1, op2, optr) => {
    try {
      const operantOne = op1.includes('.') ? parseFloat(op1) : parseInt(op1);
      const operantTwo = op2.includes('.') ? parseFloat(op2) : parseInt(op2);
      switch (optr) {
        case "+":
          return (operantOne + operantTwo).toString();
        case "-":
          return (operantOne - operantTwo).toString();
        case "x":
          return (operantOne * operantTwo).toString();
        case "/":
          return (operantOne / operantTwo).toString();
        case "%":
          return (operantOne % operantTwo).toString();
        default:
          return "bad expression";
      }
    } catch {
      return "something wrong";
    }
  };
  const onKeyPress = (key) => {
    if (isDelete(key)) {
      return isAC(key) ? onClearAll() : onClear();
    } else if (isOperator(key)) {
      if (isEqual(key) && result && otherOperant && selectedOperator) {
        const res = evaluate(result, otherOperant, selectedOperator);
        setResult(`${res}`);
        setWaitingForOperant(false);
        setOtherOperant("");
      } else if (!isEqual(key)) {
        if (result && otherOperant) {
          const res = evaluate(result, otherOperant, selectedOperator);
          setResult(`${res}`);
        }
        setWaitingForOperant(true);
        setSelectedOperator(key);
        setOtherOperant("");
      }
      return;
    } else {
      if (
        (isDot(key) &&
          (!waitingForOperant
            ? !result.includes(key)
            : !otherOperant.includes(key))) ||
        !isDot(key)
      ) {
        return !waitingForOperant
          ? setResult(`${result}${key}`)
          : setOtherOperant(`${otherOperant}${key}`);
      }
    }
  };

  const keys = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "=",
  ];

  return (
    <CalculatorWrapper>
      <Section>
        <Screen
          data={waitingForOperant && otherOperant ? otherOperant : result}
        />
      </Section>
      <Section>
        <Keypad keys={keys} onPress={onKeyPress} />
      </Section>
    </CalculatorWrapper>
  );
};

export default Calculator;
