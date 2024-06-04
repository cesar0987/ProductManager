const mongoose = require("mongoose");

mongoose;
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://cesarbenitez46:IAIryG1Lu2O18vld@productmng.aw1uwja.mongodb.net/productManager"
    );
    console.log("Established a connection to the database");
  } catch (err) {
    console.log("Error connecting to the database", err);
  }
}

connectDB();
