import React, { useState } from "react";

function PrevValue() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  function handleChange(event) {
    // Note the alternative way to extracting data from the event:
    // let newName = event.target.value;
    // let inputNum = event.target.name;
    const { name, value } = event.target;

    // prevValue is a pre-set variable. Call it with an anon function.
    setFullName(prevValue => {
      if (name === "0")
        return {
          firstName: value,
          lastName: prevValue.lastName,
          email: prevValue.email
        };
      else if (name === "1")
        return {
          firstName: prevValue.firstName,
          lastName: value,
          email: prevValue.email
        };
      else
        return {
          firstName: prevValue.firstName,
          lastName: prevValue.lastName,
          email: value
        };
    });
  }

  return (
    <div className="main">
      <h3>Complex States and prevValue Function</h3>
      <p>
        This page demonstrates how to use objects with the setState function.
        The object here is the full name of a person with its members being the
        first name, last name, and email. This also demonstrates how to call the
        previous values of states to fill unchanging object members.
      </p>
      First Name:{" "}
      <input
        type="text"
        onChange={handleChange}
        name="0"
        value={fullName.firstname}
      />
      <br />
      Last Name:{" "}
      <input
        type="text"
        onChange={handleChange}
        name="1"
        value={fullName.lastName}
      />
      <br />
      Email:{" "}
      <input
        type="email"
        onChange={handleChange}
        name="2"
        value={fullName.email}
      />
      <br />
      <br />
      Hello there {fullName.firstName} {fullName.lastName}
      <br />
      {fullName.email}!
      <hr />
      <h3>Misc Tips:</h3>
      <p>
        Don't ever attempt to access the event inside a state changing function.
      </p>
    </div>
  );
}

export default PrevValue;
