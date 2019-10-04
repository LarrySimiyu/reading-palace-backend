exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          title: "One and Only"
        },
        {
          id: 2,
          title: "Second To Come"
        },
        {
          id: 3,
          title: "Third Movie"
        },
        {
          id: 4,
          title: "Movie Four"
        }
      ]);
    });
};
