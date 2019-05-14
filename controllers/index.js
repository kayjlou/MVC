const db = require("../config");

module.exports = {
  //Here are functions that contain mysql queries
  getMovies: _ => {
    db.query("SELECT * FROM movies");
  },
  getMovie: _ => {
    db.query("SELECT * FROM movies WHERE ?");
  },
  addMovie: _ => {
    "INSERT INTO movies SET ?";
  },
  updateMovie: _ => {
    "UPDATE movies SET ? WHERE ?";
  },
  deleteMovie: _ => {}
};
