import { elements } from "../handleNavigation/nodes.js";
import { renderCategoryList } from "./renderCategoryList.js";

async function getCategoriesMoviesPreview() {
  const response = await fetch(
    "https://onimovies-api.onrender.com/api/v1/category/movie/list",
    { mode: "no-cors" }
  );
  const categories = await response.json();

  renderCategoryList(categories, elements.categoriesPreviewList);
}

export { getCategoriesMoviesPreview };
