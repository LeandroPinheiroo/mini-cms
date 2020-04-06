const Category = require("../models/category.model.js");

exports.create = (req,result) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description
    });
    Category.create(category, (err, data) => {
        if (err){
            result(null,err);
            return;
        }
        result(null,data);    
    });
};

exports.getAll = (result) => {
    Category.getAll((err, data) => {
        if (err){
            result(null,err);
            return;
        }
        result(null,data);
    });
};

exports.get = (id,result) => {
    Category.get(id,(err, data) => {
        if (err){
            result(null,err);
            return
        }
        result(null,data);
    });
};

exports.update = (id,category,result) => {
    Category.update(id, new Category(category),
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
    Category.delete(id, (err, data) => {
        if (err) {
            result(null,err);
            return;
        } 
        result(null,data);
    });
};
