const ProdMngController = require("../controllers/prodMng.controllers.js");

module.exports = (app) => {
  app.get("/api/product", ProdMngController.findAllProducts);
  app.get("/api/product/:id", ProdMngController.findOneProduct);
  app.post("/api/product/new", ProdMngController.createProduct);
  app.put("/api/product/update/:id", ProdMngController.updateProduct);
  app.delete("/api/product/delete/:id", ProdMngController.deleteProduct);
};
