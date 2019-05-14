//import functions written in controllers index
const {
  getMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie
} = require("../controllers");

module.exports = app => {
  // Get all movies
  app.get("/movies", (req, res) => {});
  getMovies();
  // Get 1 movie -- could say t for title
  app.get("/movies/:t", (req, res) => {});
  getMovie();
  //Post a movie
  app.post("/movies", (req, res) => {});
  addMovie();
  //Put a movie -- use id because updating specific
  app.put("/movie/:id", (req, res) => {});
  updateMovie();
  //Delete movie
  app.delete("/movies/:id", (req, res) => {});
  deleteMovie();
};
