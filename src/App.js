import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [preState, setPreState] = useState("");
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    if (operator) {
      setPreState(input);
      setInput("");
    }
  }, [operator]);

  const inputNum = (e) => {
    if (input) {
      setInput(input + e.target.innerText);
    } else {
      setInput(e.target.innerText);
    }
  };

  const operatorType = (e) => {
    setOperator(e.target.innerText);
  };

  const equal = () => {
    let cal;
    switch (operator) {
      case "/":
        cal = preState / input;
        break;
      case "+":
        cal = Number(preState) + Number(input);
        break;
      case "x":
        cal = preState * input;
        break;
      case "-":
        cal = preState - input;
        break;
      default:
        return;
    }
    setInput(cal);
    setPreState("");
  };

  const reset = () => {
    setInput("");
    setOperator(null);
    setPreState("");
  };

  return (
    <div className="screen">
      <div className="container">
        <div className="wrapper">
          <div className="display">{input ? input : "0"}</div>
          <div className="btn other" onClick={reset}>
            AC
          </div>
          <div className="btn other">+/-</div>
          <div className="btn other">%</div>
          <div className="btn operator" onClick={operatorType}>
            /
          </div>
          <div className="btn number" onClick={inputNum}>
            7
          </div>
          <div className="btn number" onClick={inputNum}>
            8
          </div>
          <div className="btn number" onClick={inputNum}>
            9
          </div>
          <div className="btn operator" onClick={operatorType}>
            x
          </div>
          <div className="btn number" onClick={inputNum}>
            4
          </div>
          <div className="btn number" onClick={inputNum}>
            5
          </div>
          <div className="btn number" onClick={inputNum}>
            6
          </div>
          <div className="btn operator" onClick={operatorType}>
            -
          </div>
          <div className="btn number" onClick={inputNum}>
            1
          </div>
          <div className="btn number" onClick={inputNum}>
            2
          </div>
          <div className="btn number" onClick={inputNum}>
            3
          </div>
          <div className="btn operator" onClick={operatorType}>
            +
          </div>
          <div className="zero-number" onClick={inputNum}>
            0
          </div>
          <div className="btn number">.</div>
          <div className="btn operator" onClick={equal}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
