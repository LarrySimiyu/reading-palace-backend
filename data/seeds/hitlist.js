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
          author: "Channing Hate"
        },
        {
          id: 2,
          title: "Second To Come",
          author: "Dwight Shoota"
        },
        {
          id: 3,
          title: "Aaird Movie",
          author: "Jimmy Pranke"
        },
        {
          id: 4,
          title: "Movie Four",
          author: "Manny McFaly"
        }
      ]);
    });
};
