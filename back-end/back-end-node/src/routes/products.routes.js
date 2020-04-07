module.exports = app => {
    const products = require("../app/controllers/product.controller.js");
  
    // Create a new Product
    app.post("/api/v1/product", products.create);
  
    // Retrieve all Produdcts
    app.get("/api/v1/product", products.getAll);
  
    // Retrieve a single Product with productID
    app.get("/api/v1/product/:productID", products.get);
  
    // Update a Product with productID
    app.put("/api/v1/product/:productID", products.update);
  
    // Delete a Product with productID
    app.delete("/api/v1/product/:productID", products.delete);
  
};