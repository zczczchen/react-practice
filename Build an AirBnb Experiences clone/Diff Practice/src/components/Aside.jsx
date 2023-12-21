import ReactDOM from "react-dom/client";

function Name() {
  const firstName = "Joe";
  const lastName = "Schmoe";

  return (
    <h1>
      Hello {firstName} {lastName}!
    </h1>
  );
}

function CurrentlyTime() {
  const date = new Date();
  const hours = date.getHours() % 12;
  // everything put inside {} will run in JavaScript
  return <h1>It is currently about {hours} o'clock!</h1>;
}

function TimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  /*
  Challenge: fix the h1 below to use the timeOfDay
  string we determined in the code above
  */

  return <h1>Good {timeOfDay}!</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Name />
    <CurrentlyTime />
    <TimeOfDay />
  </>
);
