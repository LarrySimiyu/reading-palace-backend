exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("hit_list")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("hit_list").insert([
        {
          id: 1,
          title: "One and Only",
          screenwriter: "Channing Hate"
        },
        {
          id: 2,
          title: "Second To Come",
          screenwriter: "Dwight Shoota"
        },
        {
          id: 3,
          title: "Aaird Movie",
          screenwriter: "Jimmy Pranke"
        },
        {
          id: 4,
          title: "Movie Four",
          screenwriter: "Manny McFaly"
        }
      ]);
    });
};
