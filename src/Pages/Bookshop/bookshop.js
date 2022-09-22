import React from "react";
// import books from "./books.json";
import { books } from "./books";
import Book from "./Book";

// CSS
import "./bookshop.css";

function BookShop() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

export default BookShop;
