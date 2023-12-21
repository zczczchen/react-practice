import React from "react";
import ReactDOM from "react-dom/client";
import Info from "./Info.jsx";
import Description from "./Description.jsx";
import Footer from "./footer.jsx";
import "./reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='wrap'>
    <Info />
    <Description />
    <Footer />
  </div>
);
