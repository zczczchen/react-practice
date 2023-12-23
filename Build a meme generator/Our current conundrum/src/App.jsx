import React from "react";

function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  // const thingsArray = ["Thing 1", "Thing 2"];

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
    // thingsArray.push(newThingText);
    // console.log(thingsArray);
  }

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

export default App;
