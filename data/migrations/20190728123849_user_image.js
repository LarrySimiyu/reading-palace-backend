exports.up = function(knex) {
  return knex.schema.createTable("user_image", tbl => {
    tbl.increments();
    tbl.text("user_image_name", 400);

    //references to screenplay table of screenplay_image
    tbl
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("film_info")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user_image");
};
