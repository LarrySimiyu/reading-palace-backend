exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("hit_list")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("hit_list").insert([
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
          title: "Aaird Movie"
        },
        {
          id: 4,
          title: "Movie Four"
        }
      ]);
    });
};
