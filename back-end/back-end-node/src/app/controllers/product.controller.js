const ProductRepository = require("../repositories/product.repository.js");

// Create and Save a new Product
exports.create = (req, res) => {
	ProductRepository.create(req,(err, data) => {
		if(err){
			res.status(500).send({
				message: err.message || "Some error occurred while get all the product."
			});
		}else{
			res.send({'product':data});
		}
	});
};

// Retrieve all Products from the database.
exports.getAll = (req, res) => {
  	ProductRepository.getAll((err, data) => {
    	if (err){
      		res.status(500).send({
        		message: err.message || "Some error occurred while get all the products."
			  });
		}else {
      		res.send({'products':data});
    	}
  	});
};

// Find a single Product with a productID
exports.get = (req, res) => {
    ProductRepository.get(req.params.productID, (err, data) => {
    	if (err){
      		res.status(500).send({
        		message: err.message || "Some error occurred while get the product."
			});
		}else {
      		res.send({'product':data});
    	}
  	});
};

// Update a Product identified by the productID in the request
exports.update = (req, res) => {
	ProductRepository.update(req.params.productID,req.body,(err, data) => {
		if (err){
			res.status(500).send({
				message: err.message || "Some error occurred while update the product."
			});
			return;
		}
		res.send({'product':data});
	});
};

// Delete a Product with the specified productID in the request
exports.delete = (req, res) => {
    ProductRepository.delete(req.params.productID,(err, data) => {
		if (err){
			res.status(500).send({
				message: err.message || "Some error occurred while delete the product."
			});
			return;
		}
		res.send({'product':data});
	});
};
