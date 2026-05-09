import movies from "./data.js";
import { renderMouvies } from "./render.js";
import { searchFilm } from "./search.js";
import { filteredByGenre } from "./filteredByGenre.js";
import { sortedMouvies } from "./sorted.js";

const moviesContainer = document.querySelector("[data-movies]");
renderMouvies(movies, moviesContainer);

//пошук фільмів
const inputSearchFilm = document.querySelector("[data-search]");
const handleSearchFilm = (event) => {
  const query = event.target.value.toLowerCase();
  const searchedFilm = searchFilm(query, movies);
  renderMouvies(searchedFilm, moviesContainer);
  console.log(query);
};

inputSearchFilm.addEventListener("input", handleSearchFilm);

// фільтрація за жанром

const buttonFilterByGenre = document.querySelector("[data-filter]");
const handleFilter = (event) => {
  const currentUsedGenre = event.target.dataset.genre;
  const filteredGenre = filteredByGenre(currentUsedGenre, movies);
  renderMouvies(filteredGenre, moviesContainer);
};

buttonFilterByGenre.addEventListener("click", handleFilter);

// фільтрація за рейтингом та роком

const sortSelect = document.querySelector("[data-sort]");
const handleSort = (event) => {
  const query = event.target.value;
  const filteredMouvies = sortedMouvies(query, movies);
  renderMouvies(filteredMouvies, moviesContainer);
};

sortSelect.addEventListener("change", handleSort);
