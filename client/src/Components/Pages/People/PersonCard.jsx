import React from "react";

function PersonCard(props) {
  let nameStyle = { color: "maroon" };
  return (
    <div className="card">
      <h3 style={nameStyle}>{props.name}</h3>
      <hr />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default PersonCard;
