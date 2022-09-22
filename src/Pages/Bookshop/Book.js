import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert("Labas");
  };
  const complesExapmple = () => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="" className="image" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Push
      </button>
      <button type="button" onClick={() => complesExapmple(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
