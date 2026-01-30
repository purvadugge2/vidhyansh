const healthCheck = (req, res) => {
  res.json({
    status: "OK",
    message: "Vidhyansh API is running clean architecture",
  });
};

module.exports = { healthCheck };
