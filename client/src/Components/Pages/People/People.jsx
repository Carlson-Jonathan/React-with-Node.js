import React from "react";
import Person from "../../Database";
import PersonCard from "./PersonCard";
// import { Alternate } from "./PersonCard";

// To display an individual person, simply pull the individual attribute direcly
// from the database like so:
//
// function displayPerson() {
//   return (
//     <div>
//       {Person[0].name} - {Person[0].phone} - {Person[0].email}
//     </div>
//   );
// }

// To loop throuh all items in the database and display them you need 2 functions:
// function displayPerson(Person) {
//   return (
//     <div>
//       {Person.name} - {Person.phone} - {Person.email}
//     </div>
//   );
// }

// To loop throuh all items in the database and display them you need 2 functions:
// function displayPerson(Person) {
//   return (
//     <Alternate
//       key={Person.id}
//       name={Person.name}
//       phone={Person.phone}
//       email={Person.email}
//     />
//   );
// }

// // When seperating into another file, do this. Make sure to include your "key" (id).
function displayPerson(Person) {
  return (
    <PersonCard
      key={Person.id}
      name={Person.name}
      phone={Person.phone}
      email={Person.email}
    />
  );
}

// Adding the map() function is basically like using a "for each" loop.
function showAllPeople() {
  return <div>{Person.map(displayPerson)}</div>;
}

// Alternative Example using shortened anonymous, nested function. This
// can subsitute using the above 2 functions:
// function showAllPeople() {
//   return (
//     <div>
//       {Person.map(Person => (
//         <PersonCard
//           key={Person.id}
//           name={Person.name}
//           phone={Person.phone}
//           email={Person.email}
//         />
//       ))}
//     </div>
//   );
// }

export default showAllPeople;
