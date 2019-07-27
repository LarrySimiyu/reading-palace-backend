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
          colName: "rowValue2"
        },
        {
          id: 3,
          colName: "rowValue3"
        }
      ]);
    });
};
