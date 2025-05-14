const express = require("express");
const PORT = 3000;

const app = express();

app.get("/health", (req, res) => {
  res.send("server is healthy(✓)");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

