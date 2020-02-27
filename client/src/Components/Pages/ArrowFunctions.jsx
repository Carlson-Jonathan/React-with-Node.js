/******************************************************************************
 * This is an example of how to print out a normal array using the map()
 * function. It also illustrates how you can use alternative syntax to declare
 * an anonymous function to make code shorter, and possibly more readable.
 ******************************************************************************/
import React, { useState } from "react";

// Example of how to modify an array using map():
var someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Vanilla method when using an anonymous function:
const modifiedArray = someArray.map(function(num) {
  return num * 2;
  // modifiedArray outputs "2, 4, 6, 8..."
});

// Alternative (optional) syntax 1 for declaring anonymous functions:
const alternateArray1 = someArray.map(num => {
  return num * 3;
});

// Alternative syntax 2 for declaring anonymous functions:
const alternateArray2 = someArray.map(num => num * 4);

/******************* Display everything to the HTML output ******************/
let arrayToDisplay = someArray;

// Note: the index and key is to eliminate a warning only.
function ShowNumber(displayArray, index) {
  return (
    <p key={index} style={{ display: "inline", width: "20px" }}>
      {displayArray},&nbsp;
    </p>
  );
}

function ShowAllNumbers() {
  // Select which array you want to display
  const [state, setState] = useState(0);

  if (state === 1) arrayToDisplay = modifiedArray;
  else if (state === 2) arrayToDisplay = alternateArray1;
  else if (state === 3) arrayToDisplay = alternateArray2;
  else arrayToDisplay = someArray;

  return (
    <div className="main">
      <br />
      <h3>Arrow (Anonymous) Functions</h3>
      In JSX, anonymous functions can be shortened. All of the following do the
      same thing:
      <br />
      <ul className="code">
        function(param1, param2) &#123; return param1 + param2; &#125;
        <br />
        (param1, param2) => &#123; return param1 + param2; &#125; <br />
        (param1, param2) => param1 + param2;
      </ul>
      <p>
        It is possible to do this with complex functions, but for readability
        purposes, it is best practice to only shorten simple functions. See
        below for a demonstration of an array being modified using each of the
        above function syntax.
      </p>
      <hr />
      <h3>Using "map( )"</h3>
      <p>
        In this example, we are using the map() function to print an array. The
        map() function needs a "key" index, otherwise you will get a bunch of
        warnings. See the code about how to get around this. Click a button
        below to multiply each number in the default array using various
        anonymos function syntax.{" "}
      </p>
      <strong>Example output Array: </strong>
      {arrayToDisplay.map(ShowNumber)}
      <br />
      <br />
      <button onClick={() => setState(0)}>Times 1</button>
      <button onClick={() => setState(1)}>Times 2</button>
      <button onClick={() => setState(2)}>Times 3</button>
      <button onClick={() => setState(3)}>Times 4</button>
      <p>
        When calling a function with a button ("onClick"), you need to call it
        within another anonymos function (something to do with JSON strings):
      </p>
      <ul className="code">
        &lt;button onClick=&#123;
        <span style={{ color: "red", fontWeight: "900" }}>( ) =></span>
        callBack( param ) &#125; &gt; Button Name &lt;/button&gt;
      </ul>
      <hr />
      <h3>States in JSX:</h3>
      <p>
        When the state changes, the entire function is re-called and everything
        is re-rendered. This is why useState() needs to be called in the root of
        a JSX function. However, a state cannot change mid-function. It has to
        complete the current iteration before the state change will take affect
        at the start of the next loop. Therefore, organize your code
        accordingly.
      </p>
    </div>
  );
}

export default ShowAllNumbers;
