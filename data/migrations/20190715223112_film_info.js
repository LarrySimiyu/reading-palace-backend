exports.up = function(knex) {
  return knex.schema.createTable("film_info", tbl => {
    tbl.increments();
    tbl.string("title", 100).notNullable();
    tbl.string("author", 100).notNullable();
    tbl.string("co_author", 100);
    tbl.text("description", 1000).notNullable();
    tbl.string("category", 25).notNullable(); // category tags? - find by category tags
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("film_info");
};
