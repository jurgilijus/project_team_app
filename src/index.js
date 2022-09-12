import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const vardas = 6;

function Greetings() {
  return <h4>Laba diena esu Jurgis ir tai mano pirmasis komponentas</h4>;
}

root.render(<Greetings />);
