exports.up = function(knex) {
  return knex.schema.createTable("screenplay_image", tbl => {
    tbl.increments();
    tbl.text("screenplay_image_name", 400);

    //references to screenplay table of screenplay_image
    tbl
      .integer("screenplay_id")
      .unsigned()
      .references("id")
      .inTable("property")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("screenplay_image");
};
