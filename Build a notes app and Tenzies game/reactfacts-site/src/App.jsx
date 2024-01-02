import React from "react";
import Navbar from "./componets/Navbar";
import Main from "./componets/Main";
import "./style.css";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => {
      return !prevMode;
    });
  }

  return (
    <div className='container'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
