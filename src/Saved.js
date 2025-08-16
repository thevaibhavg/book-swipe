import React from "react";

export default function Saved({ saved }) {
  return (
    <div>
      <h2>❤️ Saved Books</h2>
      {saved.length === 0 && <p>No saved books yet!</p>}
      <ul>
        {saved.map((book) => (
          <li key={book.id}>
            <img
              src={book.cover}
              alt={book.title}
              style={{ width: "50px", marginRight: "10px" }}
            />
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
