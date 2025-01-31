import React, { useState, useEffect } from "react";
import axios from "axios";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch books data from Flask backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => {
        setBooks(response.data);
        setFilteredBooks(response.data); // Initially display all books
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch books. Please try again.");
        setLoading(false);
      });
  }, []);

  // Handle search
  const handleSearch = () => {
    const result = books.filter(
      (book) =>
        book.bookid
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(result);
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchQuery("");
    setFilteredBooks(books); // Show all books again
  };

  return (
    <div>
      <h2 className="my-4">Library Books</h2>

      {loading && <p>Loading books...</p>}

      {error && <p className="text-danger">{error}</p>}

      {/* Search bar */}
      <div className="my-3 mx-2">
        <label htmlFor="searchInput" className="form-label">
          Search for a book
        </label>
        <input
          type="text"
          className="form-control"
          id="searchInput"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          placeholder="Enter book name or ID"
        />
        <button className="btn btn-primary mt-3" onClick={handleSearch}>
          Search
        </button>
        <button
          className="btn btn-secondary mt-3 ms-2"
          onClick={handleClearSearch}
        >
          Clear Search
        </button>
      </div>

      {/* Book Table */}
      <div>
        <h2>{filteredBooks.length > 0 ? "Books Found" : "No Books Found"}</h2>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Count Available</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.bookid}>
                <td>{book.bookid}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.counts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksPage;
