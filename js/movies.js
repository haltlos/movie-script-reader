const moviesList = [
  {
    imdbID: "tt0369339",
    Title: "Collateral",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE3NjM5OTMxMV5BMl5BanBnXkFtZTcwOTIzMTQyMw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0116695",
    Title: "Jerry Maguire",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTM0ZWNmZTUtOTVkZS00MTZiLTg3M2QtZjA0Y2RmOWM1NWEyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0181689",
    Title: "Minority Report",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTI3YzZjZjEtMDdjOC00OWVjLTk0YmYtYzI2MGMwZjFiMzBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0092099",
    Title: "Top Gun",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0325710",
    Title: "The Last Samurai",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt1631867",
    Title: "Edge of Tomorrow",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_SX300.jpg",
  },
  {
    imdbID: "tt1483013",
    Title: "Oblivion",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg",
  },
];

function initMovies() {
  displayMoviePosters(moviesList);
  displayMovieDetails(moviesList[0].imdbID);
  document
    .querySelector(".intro__images")
    .addEventListener("click", handleClickPoster);
}

function displayMoviePosters(movies) {
  let html = "";
  for (const movie of movies) {
    html += getMoviePosterHtml(movie);
  }
  document.querySelector(".intro__images").innerHTML = html;
}

function getMoviePosterHtml({ imdbID, Poster, Title }) {
  const html = `
<div class="intro__images__img" data-id="${imdbID}"><img src="${Poster}" alt="${Title}" /></div>
`;
  return html;
}

function handleClickPoster(e) {
  const clickedElement = e.target;
  const clickedPoster = clickedElement.closest(".intro__images__img");

  if (!clickedPoster) {
    return;
  }
  const id = clickedPoster.dataset.id;
  //   console.log(id);
  displayMovieDetails(id);
  dumpUnits(selectDatabase(id));
  document.querySelector(".sidebar__actors__content").innerHTML = "";
  displayActors(collectActorNames(units));
}

function selectDatabase(id) {
  switch (id) {
    case "tt0369339":
      units = array_tt0369339;
      break;
    case "tt0116695":
      units = array_tt0116695;
      break;
  }
  console.log(units);
  return units;
}

function displayMovieDetails(id) {
  const movieSelected = moviesList.find(movie => movie.imdbID === id);
  //   console.log("movieSelected", movieSelected.Title);
  document.querySelector("main h2 cite").innerText = movieSelected.Title;

  const image = document.createElement("img");
  image.classList.add("poster-image");
  image.src = movieSelected.Poster;
  image.alt = movieSelected.Title;
  console.log(image);

  const posterContainer = document.querySelector(".sidebar__poster");
  posterContainer.innerHTML = "";
  posterContainer.append(image);
}

/* 
When the page loads get the tilte and image from the first object
*/
