import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function BookList() {
  return (
    <div>
      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <div>
      <Image />
      <Title />
      <Author />
    </div>
  );
};

const Image = () => {
  return <img src="./images/rose.png" alt="" className="image" />;
};

const Title = () => {
  return <h2>I love you to the moon an back</h2>;
};
const Author = () => {
  return <h4>Amelia Hepworth</h4>;
};

root.render(<BookList />);
