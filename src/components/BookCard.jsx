import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img
        src={
          book.imageLinks ? book.imageLinks.thumbnail : "https://via.placeholder.com/128x195?text=No+Image"
        }
        alt={book.title}
      />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.authors ? book.authors.join(", ") : "Unknown"}</p>
      <p>{book.description ? book.description.slice(0, 100) + "..." : "No description available"}</p>
    </div>
  );
};

export default BookCard;
