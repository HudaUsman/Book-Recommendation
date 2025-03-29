import React, { useState, useEffect } from "react";
import CategoryDropdown from "./components/CategoryDropdown";
import BookCard from "./components/BookCard";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("fiction");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks(category);
  }, [category]);

  const fetchBooks = async (selectedCategory) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${selectedCategory}&maxResults=12`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      setError("Failed to fetch books. Please try again.");
      setBooks([]);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>📚 Book Recommendation System</h1>
      <CategoryDropdown setCategory={setCategory} />
      {loading && <p>Loading books...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="books-container">
        {books.map((book) => (
          <BookCard key={book.id} book={book.volumeInfo} />
        ))}
      </div>
    </div>
  );
};

export default App;
