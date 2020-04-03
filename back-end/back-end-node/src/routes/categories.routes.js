module.exports = app => {
    const categories = require("../app/controllers/categoryController.js");
  
    // Create a new Category
    app.post("/api/v1/category", categories.create);
  
    // Retrieve all Categories
    app.get("/api/v1/category", categories.getAll);
  
    // Retrieve a single Category with categoryID
    app.get("/api/v1/category/:categoryID", categories.get);
  
    // Update a Category with categoryID
    app.put("/api/v1/category/:categoryID", categories.update);
  
    // Delete a Category with categoryID
    app.delete("/api/v1/category/:categoryID", categories.delete);
  
};