const sql = require("../database/db.js");

// constructor
const Category = function(category) {
  this.name = category.name;
  this.description = category.description;
};

Category.create = (newCategory, result) => {
  sql.query("INSERT INTO categories SET ?", newCategory, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newCategory });
  });
};

Category.get = (categoryId, result) => {
  sql.query(`SELECT * FROM categories WHERE id = ${categoryId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }
    // not found Category with the id
    result({ kind: "not_found" }, null);
  });
};

Category.getAll = result  => {
   sql.query("SELECT * FROM categories", (err, res) => {
    if (err) {
      return result(null, err);
    }
    return result(null, res);
  });
};

Category.update = (id, category, result) => {
  sql.query(
    "UPDATE categories SET name = ?, description = ? WHERE id = ?",
    [category.name, category.description, id],
    (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Category with the id
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, { id: id, ...category });
    }
  );
};

Category.delete = (id, result) => {
  sql.query("DELETE FROM categories WHERE id = ?", id, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Category with the id
      result({ kind: "not_found" }, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Category;