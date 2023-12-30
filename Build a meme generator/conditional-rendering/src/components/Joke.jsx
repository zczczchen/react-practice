import React from "react";
import "../css/joke.css";

export default function Joke(props) {
  /**
   * Challenge:
   * - Only display the punchline paragraph if `isShown` is true
   */
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => {
      return !prevShown;
    });
  }

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
    </div>
  );
}
