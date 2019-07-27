exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("film_info")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("film_info").insert([
        {
          id: 1,
          Tile: "First Movie",
          Description: "Change my name to something cool",
          Category: "nasty"
        },
        {
          id: 2,
          Tile: "Second Movie",
          Description: "Change my name to something dope",
          Category: "droopy"
        },
        {
          id: 3,
          Tile: "Third Movie",
          Description: "Change my name to something lame",
          Category: "poopy"
        }
      ]);
    });
};
