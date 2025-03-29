import React from 'react';


const BookCard = ({ book }) => {
  const { volumeInfo } = book;

  return (
    <div className="book-card">
      <img
        src={
          volumeInfo.imageLinks?.thumbnail ||
          'https://via.placeholder.com/128x193?text=No+Image'
        }
        alt={volumeInfo.title}
      />
      <h3>{volumeInfo.title}</h3>
      <p><strong>Author:</strong> {volumeInfo.authors?.join(', ') || 'N/A'}</p>
      <p>{volumeInfo.description?.slice(0, 150)}...</p>
    </div>
  );
};

export default BookCard;
