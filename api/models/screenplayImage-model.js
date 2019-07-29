const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

function add(image) {
  return db("screenplay_image").insert(image);
}

function find() {
  return db("screenplay_image");
}
