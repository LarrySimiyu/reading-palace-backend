exports.up = function(knex) {
  return knex.schema.createTable("film_info", tbl => {
    tbl.increments();
    tbl.string("Title", 100);
    tbl.string("Description", 1000);
    tbl.string("Category", 25); // category tags? - find by category tags
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("film_info");
};
