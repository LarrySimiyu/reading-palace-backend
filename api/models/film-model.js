const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  get,
  findById,
  update,
  remove
};

async function add(script) {
  return db("film_info").insert(script);
}

function get(id) {
  if (id) {
    return db("film_info")
      .where({ id: Number(id) })
      .first();
  } else {
    return db("film_info");
  }
}

function findById(id) {
  return db("film_info")
    .where({ id })
    .first();
}

function remove(id) {
  return db("film_info");
}
