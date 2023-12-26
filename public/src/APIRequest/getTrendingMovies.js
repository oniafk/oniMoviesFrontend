import { elements } from "../handleNavigation/nodes.js";
import { renderMovieList } from "./renderMovieList.js";

async function getTrendingMovies() {
  const response = await fetch(
    "https://onimovies-api.onrender.com/api/v1/trending/movie/day",
    { mode: "no-cors" }
  );
  const movies = await response.json();
  console.log(movies);

  renderMovieList(movies, elements.trendingMoviesPreviewList);
}

export { getTrendingMovies };
