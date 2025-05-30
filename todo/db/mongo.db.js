const mongoose = require("mongoose");
const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://phurbasekai134:phurba12345@cluster1.oxsnu9i.mongodb.net/todo"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
