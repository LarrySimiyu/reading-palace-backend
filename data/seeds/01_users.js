exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          email: "broidk@gmail.com",
          username: "larrysimiyu",
          password: "hephanie"
        },
        {
          id: 2,
          email: "hephanie23@gmail.com",
          username: "stephanie",
          password: "boompow"
        },
        {
          id: 3,
          email: "strugglingUCBstudent@gmail.com",
          username: "failingOchem",
          password: "momsgonnabeatmyass"
        }
      ]);
    });
};
