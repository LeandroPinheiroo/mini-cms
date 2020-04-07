const Product = require("../models/product.model.js");

exports.create = (req,result) => {
    const product = new Product({
        name: req.body.name,
        stock: req.body.stock,
        price: req.body.price,
        description: req.body.description
    });
    Product.create(product, (err, data) => {
        if (err){
            result(null,err);
            return;
        }
        result(null,data);    
    });
};

exports.getAll = (result) => {
    Product.getAll((err, data) => {
        if (err){
            result(null,err);
            return;
        }
        result(null,data);
    });
};

exports.get = (id,result) => {
    Product.get(id,(err, data) => {
        if (err){
            result(null,err);
            return;
        }
        result(null,data);
    });
};

exports.update = (id,product,result) => {
    Product.update(id, new Product(product),
        (err, data) => {
            if (err) {
                result(null,err);
                return;
            } 
            result(null,data);
        }
    );
};

exports.delete = (id,result) => {
    Product.delete(id, (err, data) => {
        if (err) {
            result(null,err);
            return;
        } 
        result(null,data);
    });
};
