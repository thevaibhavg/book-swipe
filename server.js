const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    summary: "A tragic love story set in the Jazz Age.",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    id: 2,
    title: "1984",
    summary: "A dystopian novel about surveillance and control.",
    cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    summary: "A romantic novel exploring manners and society.",
    cover: "https://covers.openlibrary.org/b/id/8231994-L.jpg"
  }
];

app.use(express.static(path.join(__dirname, "build")));

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
