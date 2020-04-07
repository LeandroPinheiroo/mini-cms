const sql = require("../database/db.js");

// constructor
const Product = function(product) {
  this.name = product.name;
  this.stock = product.stock;
  this.price = product.price;
  this.description = product.description;
};

Product.create = (newProduct, result) => {
  sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newProduct });
  });
};

Product.get = (productId, result) => {
  sql.query(`SELECT * FROM products WHERE id = ${productId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }
    // not found Product with the id
    result({ kind: "not_found" }, null);
  });
};

Product.getAll = result  => {
   sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      return result(null, err);
    }
    return result(null, res);
  });
};

Product.update = (id, product, result) => {
  sql.query(
    "UPDATE products SET name = ?, stock = ?, price = ?, description = ? WHERE id = ?",
    [product.name, product.stock, product.price, product.description, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Product with the id
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, { id: id, ...product });
    }
  );
};

Product.delete = (id, result) => {
  sql.query("DELETE FROM products WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Product with the id
      result({ kind: "not_found" }, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Product;