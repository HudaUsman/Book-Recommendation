import React, { useState, useEffect } from 'react';
import CategoryDropdown from './components/CategoryDropDown';
import BookCard from './components/BookCard';
import './App.css';

const App = () => {
  // Define the state variables and their update functions
  const [selectedCategory, setSelectedCategory] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY; // Use API key from .env

  const fetchBooks = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=12&key=${API_KEY}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchBooks(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <div className="App">
      <h1>📚 Book Recommendation System</h1>
      <CategoryDropdown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {loading ? (
        <p>Loading books...</p>
      ) : (
        <div className="books-container">
          {books.length ? (
            books.map((book) => (
              <BookCard book={book} key={book.id} />
            ))
          ) : (
            <p>No books to display.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
