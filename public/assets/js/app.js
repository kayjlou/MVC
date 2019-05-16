const { fetch } = window;

//Can be same as backend -- won't conflict
//Front end function definition
const getMovies = _ => {
  fetch("/movies")
    .then(r => r.json())
    .then(movies => {
      // Destructure
      movies.forEach(({ id, movie }) => {
        let movieDiv = document.createElement("div");
        movieDiv.innerHTML = `
        #${id} ${movie}`;
        document.querySelector("#allMovies").append(movieDiv);
      });
    })
    .catch(e => console.log(e));
};

//grabs search and runs fetch
document.querySelector("#searchBtn").addEventListener("click", e => {
  e.preventDefault();
  fetch(`/movies/${document.querySelector("#title").value}`)
    .then(r => r.json())
    .then(movies => {
      //updateHTML
    })
    .catch();
});



