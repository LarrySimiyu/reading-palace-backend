exports.up = function(knex) {
  return knex.schema.createTable("screenplay_image", tbl => {
    tbl.increments();
    tbl.text("screenplay_image_name", 400);
  });
};

exports.down = function(knex) {};
