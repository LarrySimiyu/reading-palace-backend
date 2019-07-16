exports.up = function(knex) {
  return knex.schema.createTable("film_info", tbl => {
    tbl.increments();
    tbl.string("Title", 100);
    tbl.string("Description", 1000);
    tbl.string("");
  });
};

exports.down = function(knex) {};
