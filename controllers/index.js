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
  //Get movie function
  async getMovie(t) {
    let response = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM movies where ?", { movie: t }, (e, movies) => {
        //What do we do with movies
        if (e) reject(e);
        //Gives function value
        resolve(movies);
      });
    });
    return response;
  },

  async addMovie(movie) {
    let response = await new Promise((resolve, reject) => {
      db.query("INSERT INTO movies SET ?", { movie }, e => {
        //What do we do with movies
        if (e) reject(e);
        //Gives function value
        resolve(movies);
      });
    });
    return response;
  },
  async updateMovie(id, updates) {
    let response = await new Promise((resolve, reject) => {
      db.query("UPDATE movies SET ? WHERE ?", [updates, id], e => {
        if (e) reject(e);
        resolve();
      });
    });
  },

  updateMovie: _ => {
    "UPDATE movies SET ? WHERE ?";
  },
  deleteMovie: _ => {
    "DELETE FROM movies WHERE ?";
  }
};
