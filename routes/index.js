module.exports = app => {
  // Get all movies
  app.get("/movies", (req, res) => {});

  // Get 1 movie -- could say t for title
  app.get("/movies/:t", (req, res) => {});
};
