const express = require("express");

const app = express();

// import routes
const healthRoutes = require("./routes/healthRoutes");

// use routes
app.use("/api", healthRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
