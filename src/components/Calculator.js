import { useState } from "react";
function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const opc = ["-", "+", "/", "*", "."];

  const updateCalc = (value) => {
    if (
      (opc.includes(value) && calc === "") ||
      (opc.includes(value) && opc.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!opc.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteValue = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const date = new Date();
  const createDigits = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numbers;
  };

  return (
    <div>
      <div className="calculator_wrap">
        <div className="date">
          {date.getHours()}:{date.getMinutes()}
        </div>
        <div className="display">
          <div className="total">{calc || "0"}</div>
          {result ? <div className="data">({result})</div> : ""}
        </div>
        <div className="buttons">
          <div className="action_buttons">
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={deleteValue}>C</button>
          </div>
          <div className="digits">{createDigits()}</div>
          <div className="bottom_buttons">
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
      <div className="bottom_text">Powered by Leonix PRO</div>
    </div>
  );
}
export default Calculator;
