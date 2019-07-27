exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("film_info")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("film_info").insert([
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
