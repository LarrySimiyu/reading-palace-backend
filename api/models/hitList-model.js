const db = require("../../data/dbConfig.js");

module.exports = {
  add,
  find,
  get,
  findById,
  remove
};

async function add(script) {
  return db("hit_list").insert(script);
}

function find() {
  return db("hit_list");
}

function get(id) {
  if (id) {
    return db("hit_list")
      .where({ id: Number(id) })
      .first();
  } else {
    return db("hit_list");
  }
}

function findById(id) {
  return db("hit_list")
    .where({ id })
    .first(); // find the first instance of this
}

// remove hitlist by id
function remove(id) {
  return db("hit_list")
    .where({ id })
    .del();
}

//update not defined