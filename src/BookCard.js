import React from "react";
import TinderCard from "react-tinder-card";

export default function BookCard({ book, onSwipe }) {
  return (
    <TinderCard
      className="book-card"
      key={book.id}
      onSwipe={(dir) => onSwipe(dir, book)}
      preventSwipe={["up", "down"]}
    >
      <div
        style={{
          backgroundImage: `url(${book.cover})`,
          backgroundSize: "cover",
          borderRadius: "20px",
          width: "300px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "white",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
        }}
      >
        <h2>{book.title}</h2>
        <p>{book.summary}</p>
      </div>
    </TinderCard>
  );
}
