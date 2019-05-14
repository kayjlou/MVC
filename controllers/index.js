//Import db connection
const db = require("../config");

module.exports = {
  async getMovies() {
    let response = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM movies", (e, movies) => {
        //What do we do with movies
        if (e) reject(e);
        //Gives function value
        resolve(movies);
      });
    });
    return response;
  },
  //Here are functions that contain mysql queries
  // getMovies: _ => {

  //   db.query("SELECT * FROM movies", (e, movies) => {
  //     //What do we do with movies
  //     if (e) throw e;
  //     //Gives function value
  //     return movies;
  //   });
  // },
  getMovie: _ => {
    db.query("SELECT * FROM movies WHERE ?");
  },
  addMovie: _ => {
    "INSERT INTO movies SET ?";
  },
  updateMovie: _ => {
    "UPDATE movies SET ? WHERE ?";
  },
  deleteMovie: _ => {
    "DELETE FROM movies WHERE ?";
  }
};
