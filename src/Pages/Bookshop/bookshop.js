import React from "react";

// CSS
import "./bookshop.css";

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

function BookShop() {
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

export default BookShop;
