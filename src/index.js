import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

// setup vars
const books = [
  {
    id: 1,
    img: "./images/rose.png",
    title: "I love you to the moon an back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "./images/pexels-kyle-roxas-2138922.png",
    title: "Our class is a family",
    author: "Shannon Olsen",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" className="image" />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

root.render(<BookList />);
