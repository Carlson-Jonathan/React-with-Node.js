import React, { useState } from "react";

/****************************************************************************
 * Calculator code:
 ****************************************************************************/
function Display() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState(0);
  const [text, setText] = useState("");

  function Calculate(n1 = num1, n2 = num1, op = operator) {
    switch (op) {
      case "+":
        setAnswer(n1 + n2);
        break;
      case "-":
        setAnswer(n1 - n2);
        break;
      case "x":
        setAnswer(n1 * n2);
        break;
      case "÷":
        setAnswer(n1 / n2);
        break;
      default:
        setAnswer(0);
    }
  }

  function SetNum1(event) {
    let newNum = Number(event.target.value);
    setNum1(newNum);
    Calculate(newNum, num2, operator);
  }

  function SetNum2(event) {
    let newNum = Number(event.target.value);
    setNum2(newNum);
    Calculate(num1, newNum, operator);
  }

  function SetOperator(event) {
    setOperator(event.target.value);
    Calculate(num1, num2, event.target.value);
  }

  /****************************************************************************
   * Submit text code:
   ****************************************************************************/
  let newText;
  function HandleSubmit(event) {
    setText(newText);
    event.preventDefault();
  }

  function updateText(event) {
    newText = event.target.value;
  }

  /****************************************************************************
   * Return display:
   ****************************************************************************/
  return (
    <div className="main">
      <h3>React Calculator:</h3>
      <p>
        This section demonstrates how to use HTML forms on React. Notice that
        the page instantly updates without the need for a "submit" button.
      </p>
      First Number:
      <input type="number" onChange={SetNum1} style={{ width: "50px" }} />
      Second Number:
      <input type="number" onChange={SetNum2} style={{ width: "50px" }} />
      Operation:
      <select onChange={SetOperator}>
        <option value="+">Add</option>
        <option value="-">Subtract</option>
        <option value="x">Multiply</option>
        <option value="÷">Divide</option>
      </select>
      <p>
        <strong>Answer:</strong> {num1} {operator} {num2} = {answer}
      </p>
      <hr />
      <h3>Submit Buttons:</h3>
      <p>
        The default behavior in HTML when a get/post request is made is to
        refresh the page. React tries to do away with refreshing to speed things
        up. If you have your form execute a function on submit, you can prevent
        refreshing by including this code in your function:
      </p>
      <p className="code">event.preventDefault();</p>
      <p>
        Normally a refresh would kick you back to your homepage since React apps
        are mostly displayed on a single URL. You can do the below without the
        'form' tag, but you may need it for certain applications later.
      </p>
      <form onSubmit={HandleSubmit}>
        <textarea
          cols="50"
          rows="4"
          placeholder="Enter some random text here and click 'submit'."
          onChange={updateText}
        />
        <br />
        <input type="submit" value="Display Without Refreshing" />
      </form>
      <p>{text}</p>
    </div>
  );
}

export default Display;
