exports.up = function(knex) {
  return knex.schema.createTable("hit_list", tbl => {
    tbl.increments();
    tbl.string("title").notNullable();

    tbl.string("author").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("hit_list");
};
