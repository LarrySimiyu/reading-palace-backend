exports.up = function(knex) {
  return knex.schema.createTable("hit_list", tbl => {
    tbl.increments();
    tbl.string("title").unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("hit_list");
};
