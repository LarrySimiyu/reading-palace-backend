exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("film_info")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("film_info").insert([
        {
          id: 1,
          title: "Suits",
          screenwriter: "Larry Simiyu",
          co_author: "Teyonna Bosty",
          description: "Greatest screenplay of all time",
          category: "Horror"
        },
        {
          id: 2,
          title: "AA Crips",
          screenwriter: "Bobby Drew",
          co_author: "Finius Bosty",
          description: "Greatest screenplay of all time",
          category: "Romance"
        },
        {
          id: 3,
          title: "Bloody Hell Mate",
          screenwriter: "Pippy Long Pew",
          co_author: "Big Bootius",
          description: "On god we gon get you a girl bro",
          category: "Action"
        }
      ]);
    });
};
