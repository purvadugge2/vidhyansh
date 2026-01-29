const express = require("express");

const app = express();

// basic route
app.get("/", (req, res) => {
  res.send("Welcome to Vidhyansh API");
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
