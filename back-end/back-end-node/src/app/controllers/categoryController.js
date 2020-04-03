const Category = require("../models/category.js");

// Create and Save a new Category
exports.create = (req, res) => {
    console.log(req.body);
    try{
        const category = new Category({
            name: req.body.name,
            description: req.body.description
        });
        Category.create(category, (err, data) => {
            if (err)
              res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the category."
              });
            else res.send(data);
        });

    }catch(err){
        res.status(400).send({
            message: "Registration failed!"
        });
    }
  
};

// Retrieve all Categorys from the database.
exports.getAll = (req, res) => {
    Category.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while get all the category."
          });
        else res.send(data);
    });
};

// Find a single Category with a categoryID
exports.get = (req, res) => {
    Category.get(req.params.categoryID, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while get the category."
          });
        else res.send(data);
    });
};

// Update a Category identified by the categoryID in the request
exports.update = (req, res) => {

    try{
       Category.update(req.params.categoryID, new Category(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Category with id ${req.params.categoryID}.`
                    });
                    } else {
                    res.status(500).send({
                        message: "Error updating Category with id " + req.params.categoryID
                    });
                    }
                } else res.send(data);
            }
        );
    }catch(err){
        res.status(400).send({
            message: "Updating failed!"
        });
    }
  
};

// Delete a Category with the specified categoryID in the request
exports.delete = (req, res) => {
    Category.delete(req.params.categoryID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Category with id ${req.params.categoryID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Category with id " + req.params.categoryID
            });
          }
        } else res.send({ message: `Category was deleted successfully!` });
    });
};
