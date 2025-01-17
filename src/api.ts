/**
 * This file contains all the functions that interact with the TMDB API.
 * For more information, check the [documentation](https://developer.themoviedb.org/reference/intro/getting-started).
 */

const TMDB_API_KEY = "b2b2a4d0f11b83edd61cb6f2ca4194d2";

export const fetchPopularMovies = async () => {
  /**
   * Small hack to simulate a slow network connection.
   */
  const [response] = await Promise.all([
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
    ),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
  const data = await response.json();
  return data;
};
