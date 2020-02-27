import React from "react";

var someVariable = "JS variables can be inserted into HTML using curly braces.";

function Main() {
  return (
    <div className="main">
      <h3>General things to know about React:</h3>
      <ul>
        <li>
          &lt;Tag&gt;&lt;/Tag&gt; is the same as &lt;Tag /&gt; (only when
          empty).
        </li>
        <li>Component file names have ".jsx" extentions.</li>
        <li>You can import files with or without their extension.</li>
        <li>{someVariable} (see this line of code)</li>
        <li>
          When declaring CSS classes, use "className=" instead of just "class=".
        </li>
        <li>
          The primary purpose of the index.js file is to start your program. Use
          the App.jsx files to pull all of your stuff together.
        </li>
      </ul>
    </div>
  );
}

export default Main;
