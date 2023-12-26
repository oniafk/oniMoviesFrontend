import { elements } from "../handleNavigation/nodes.js";
import { renderMovieList } from "./renderMovieList.js";

async function getTrendingMoviesList() {
  const response = await fetch(
    "https://onimovies-api.onrender.com/api/v1/trending/movie/week"
  );
  const movies = await response.json();

  renderMovieList(movies, elements.genericSection);
}

export { getTrendingMoviesList };
