import React, { useState } from "react";

function Counter() {
  let [number, incrementNumber] = useState(0);

  // Make sure to pace an if statement to prevent re-rendering on state change.
  let counter;
  if (number === 0) counter = setInterval(updateNumber, 1000);

  function updateNumber() {
    incrementNumber(++number);
  }

  return (
    <div className="main">
      <h3>Using states with the setInterval function:</h3>
      <p>
        Below is a simple counter that increments every second. Note the
        behavior of states and setInterval:
      </p>
      <p className="code">setInterval( function, 1000 )</p>
      <h2
        className="main"
        style={{
          fontSize: "2em",
          margin: "0px",
          color: "maroon",
          textAlign: "center"
        }}
      >
        {number}
      </h2>
      <ul>
        <li>
          This function executes the function in the first parameter every
          (parameter 2) milliseconds.
        </li>
        <li>
          In order to update the counter number to the DOM, "useState( )" is
          needed.
        </li>
        <li>
          "useState ( )" re-calls the entire React function, including any
          functions, such as "setInterval ( )", contained therein. If you
          already have a "setInterval( )" function running, you will now have
          multiple running at the same time. This will result in a{" "}
          <span style={{ color: "red", fontWeight: "900" }}>memory leak</span>,
          which will slow down, and eventually crash your browser! This is also
          why you get an error when you try to call your setState function at
          the base level of your function - once called, it re-renders the
          function, which causes it to call it self again and again (infinite
          loop).
        </li>
        <li>
          To prevent a memory leak, simply place your "setInterval ( )" function
          inside an if statement that only allows it to be called once. See this
          code for an example.
        </li>
      </ul>
    </div>
  );
}

export default Counter;
