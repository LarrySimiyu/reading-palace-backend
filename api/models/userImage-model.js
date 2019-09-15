const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

function add(image) {
  return db("user_image").insert(image);
}

function find() {
  return db("user_image");
}

function findById(id) {
  return db("user_image")
    .where({ id })
    .first(); //find the first instance of the id
}

function update(id, changes) {
  return db("user_image")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("user_image").del();
}
