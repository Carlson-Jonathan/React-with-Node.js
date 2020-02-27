import React from "react";

// An example of how to setup CSS modifications:
const headerStyle = { color: "" };
headerStyle.color = "orange";

function Heading() {
  return <h1 style={headerStyle}>My New React Website</h1>;
}

export default Heading;
