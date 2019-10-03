exports.up = function(knex) {
  return knex.schema.createTable("film_info", tbl => {
    tbl.increments();
    tbl.string("Title", 100).notNullable();
    tbl.string("Author", 100).notNullable();
    tbl.string("Co_Author", 100);
    tbl.text("Description", 1000).notNullable();
    tbl.string("Category", 25).notNullable(); // category tags? - find by category tags
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("film_info");
};
