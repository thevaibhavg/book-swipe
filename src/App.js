import React, { useState, useEffect } from "react";

export default function App() {
  const [books, setBooks] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const handleSwipe = (direction) => {
    if (index < books.length - 1) {
      setIndex(index + 1);
    } else {
      alert("No more books!");
    }
  };

  if (books.length === 0) return <div className="text-center mt-10">Loading books...</div>;

  const book = books[index];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-6 bg-white shadow-xl rounded-2xl w-80 text-center">
        <h2 className="text-xl font-bold">{book.title}</h2>
        <p className="text-gray-700">by {book.author}</p>
        <p className="text-sm text-gray-500">{book.year}</p>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => handleSwipe("left")}
        >
          Reject
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => handleSwipe("right")}
        >
          Save
        </button>
      </div>
    </div>
  );
}
