import React from "react";
import "../css/array.css";

function Array() {
  const [thingsArray, setThingsArray] = React.useState([
    "Things 1",
    "Things 2",
  ]);

  function addItem() {
    setThingsArray((preThingsArray) => {
      return [...preThingsArray, `Things ${thingsArray.length + 1}`];
    });
  }

  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

export default Array;
