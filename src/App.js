import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import Saved from "./Saved";

export default function App() {
  const [books, setBooks] = useState([]);
  const [saved, setSaved] = useState([]);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    fetch("/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleSwipe = (dir, book) => {
    if (dir === "right") {
      setSaved((prev) => [...prev, book]);
    }
    setBooks((prev) => prev.filter((b) => b.id !== book.id));
  };

  const handleKeyDown = (e) => {
    if (!books.length) return;
    const book = books[0];
    if (e.key === "ArrowRight") handleSwipe("right", book);
    if (e.key === "ArrowLeft") handleSwipe("left", book);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>📚 Book Swipe</h1>
      <button onClick={() => setShowSaved(!showSaved)} style={{ marginBottom: "20px" }}>
        {showSaved ? "Back to Discover" : "Saved Books"}
      </button>
      {showSaved ? (
        <Saved saved={saved} />
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} onSwipe={handleSwipe} />
          ))}
        </div>
      )}
    </div>
  );
}
