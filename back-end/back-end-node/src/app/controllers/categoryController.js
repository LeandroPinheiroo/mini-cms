const CategoryRepository = require("../repositories/category.repository.js");

// Create and Save a new Category
exports.create = (req, res) => {
	CategoryRepository.create(req,(err, data) => {
		if(err){
			res.status(500).send({
				message: err.message || "Some error occurred while get all the category."
			});
		}else{
			res.send({'category':data});
		}
	});
};

// Retrieve all Categorys from the database.
exports.getAll = (req, res) => {
  	CategoryRepository.getAll((err, data) => {
    	if (err){
      		res.status(500).send({
        		message: err.message || "Some error occurred while get all the category."
			  });
		}else {
      		res.send({'categories':data});
    	}
  	});
};

// Find a single Category with a categoryID
exports.get = (req, res) => {
    CategoryRepository.get(req.params.categoryID, (err, data) => {
    	if (err){
      		res.status(500).send({
        		message: err.message || "Some error occurred while get the category."
			});
		}else {
      		res.send({'category':data});
    	}
  	});
};

// Update a Category identified by the categoryID in the request
exports.update = (req, res) => {
	CategoryRepository.update(req.params.categoryID,req.body,(err, data) => {
		if (err){
			res.status(500).send({
				message: err.message || "Some error occurred while update the category."
			});
			return;
		}
		res.send({'category':data});
	});
};

// Delete a Category with the specified categoryID in the request
exports.delete = (req, res) => {
    CategoryRepository.delete(req.params.categoryID,(err, data) => {
		if (err){
			res.status(500).send({
				message: err.message || "Some error occurred while delete the category."
			});
			return;
		}
		res.send({'category':data});
	});
};
