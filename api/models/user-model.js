const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  get,
  remove,
  update,
  findById
};

async function add(user) {
  return db("user").insert(script);
}

function get(id) {
  if (id) {
    return db("user")
      .where({ id: Number(id) })
      .first();
  } else {
    return db("user");
  }
}

function findById(id) {
  return db("user")
    .where({ id })
    .first();
}

function remove(id) {
  return db("user")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("user")
    .where({ id })
    .update(cahnges);
}
