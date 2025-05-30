const express = require("express");
const connectMongoDB = require("./db/mongo.db");
const authRoutes = require("./routes/auth.route");
const todoRoutes = require("./routes/todo.route");
const PORT = 3000;

const app = express();

connectMongoDB();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/todos", todoRoutes);

app.get("/health", (req, res) => {
  res.send("Server is running fine");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
