const express = require("express");
const cors = require("cors");
const app = express();
const prodMngRoutes = require("./routes/prodMng.routes");
const mongoose = require("mongoose");
const port = 8000;

require("./configuration/configuration.mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

prodMngRoutes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});

app.post("/api/product/new", (req, res) => {
  console.log("Request to create a new product");
  console.log(req.body);
  res.json({ message: "Request received" });
});
