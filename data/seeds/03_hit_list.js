exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          Tile: "First Movie"
        },
        {
          id: 2,
          Tile: "Second Movie"
        },
        {
          id: 3,
          Tile: "Third Movie"
        }
      ]);
    });
};
