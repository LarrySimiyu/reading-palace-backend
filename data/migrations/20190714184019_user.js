exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("email", 50).unique();
    tbl.string("username", 20);
    tbl.string("first_name", 20);
    tbl.string("last_name", 20);
    tbl.string("password").unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
