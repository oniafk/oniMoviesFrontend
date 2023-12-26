import { elements } from "../handleNavigation/nodes.js";
import { renderMovieList } from "./renderMovieList.js";

async function getTrendingMoviesList() {
  const response = await fetch(
    "https://onimovies-api.onrender.com/api/v1/trending/movie/week",
    { mode: "no-cors" }
  );
  const movies = await response.json();
  console.log(movies);

  renderMovieList(movies, elements.genericSection);
}

export { getTrendingMoviesList };
