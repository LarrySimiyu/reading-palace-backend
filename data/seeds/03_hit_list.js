exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("hit_list")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("hit_list").insert([
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
