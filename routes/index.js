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
  app.get("/movies", (req, res) => {
    //Had to write as async function as res.json would not wait for query to be completed
    getMovies()
      .then(movies => res.json(movies))
      .catch(e => console.log(e));
  });

  // Get 1 movie -- could say t for title
  app.get("/movies/:t", (req, res) => {
    getMovie({ movie: req.params.t })
      .then(movie => res.json(movie))
      .catch(e => console.log(e));
  });

  //Post a movie
  app.post("/movies", (req, res) => {
    // pass in movie into function to recieve data
    addMovie(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e));
  });

  //Put a movie -- use id because updating specific
  app.put("/movie/:id", (req, res) => {
    updateMovie({ id: req.params.id }, req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e));
  });

  //Delete movie
  app.delete("/movies/:id", (req, res) => {
    deleteMovie();
  });
};
