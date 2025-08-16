const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("/api/books", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "books.json"));
  res.json(JSON.parse(data));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
