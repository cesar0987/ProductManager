const mongoose = require("mongoose");

mongoose;
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Established a connection to the database");
  } catch (err) {
    console.log("Error connecting to the database", err);
  }
}

connectDB();
