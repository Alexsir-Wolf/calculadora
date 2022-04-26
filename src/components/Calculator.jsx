/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./Calculator.css";

export default (props) => {
  const [num, setNum] = useState("");
  const [oldNum, setOldNum] = useState();
  const [newNum, setNewNum] = useState();
  const [operator, setOperator] = useState();

  function btnNum(e) {
    setNum(num + e.target.value);
  }

  function clear() {
    setNum("");
    setOldNum("");
    setOperator("");
  }

  function percentage() {
    setNum(num / 100);
  }

  function signSwap() {
    //Math.abs(num) lib JS
    num > 0 ? setNum(-num) : setNum(Math.abs(num));
  }

  function calculate() {
    console.log(oldNum);
    console.log(num);
    if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "x") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    }
  }

  function operatorHandler(e) {
    var operatorView = e.target.value;
    setOperator(operatorView);
    setOldNum(num);
    setNewNum(oldNum);
    setNum("");
  }

  return (
    <div>
      <div className="view">
        <h5>
          {oldNum}
          {operator}
          {num}
        </h5>
        <h1>{num}</h1>
      </div>
      <div className="container">
        <button className="delete" onClick={clear}>
          C
        </button>
        <button onClick={btnNum} value={7}>
          7
        </button>
        <button onClick={btnNum} value={4}>
          4
        </button>
        <button onClick={btnNum} value={1}>
          1
        </button>
        <button className="operators" onClick={signSwap}>
          +/-
        </button>
        <button className="operators" onClick={percentage}>
          %
        </button>
        <button onClick={btnNum} value={8}>
          8
        </button>
        <button onClick={btnNum} value={5}>
          5
        </button>
        <button onClick={btnNum} value={2}>
          2
        </button>
        <button onClick={btnNum} value={0}>
          0
        </button>
        <button className="operators" onClick={operatorHandler} value="x">
          *
        </button>
        <button onClick={btnNum} value={9}>
          9
        </button>
        <button onClick={btnNum} value={6}>
          6
        </button>
        <button onClick={btnNum} value={3}>
          3
        </button>
        <button className="operators" onClick={btnNum} value=".">
          ,
        </button>
        <button className="operators" onClick={operatorHandler} value="/">
          /
        </button>
        <button className="operators" onClick={operatorHandler} value="-">
          -
        </button>
        <button className="operators" onClick={operatorHandler} value="+">
          +
        </button>
        <button className="operators" id="btnEqual" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};
