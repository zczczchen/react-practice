import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";
import "./style.css";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
