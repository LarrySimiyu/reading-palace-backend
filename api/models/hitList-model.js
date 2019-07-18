const db = require("../../data/dbConfig.js");

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

async function add(script) {
  return db("hit_list").insert(script);
}
