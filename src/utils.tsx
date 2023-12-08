import { useEffect, useState } from "react";
import { Movie, SearchParams } from "./types";
import { fetchPopularMovies } from "./api";

export const useFavoriteMovies = () => {
  const initialData = JSON.parse(
    localStorage.getItem("favoriteMovies") || "[]"
  );

  const [favoriteMovieIds, setFavoriteMovieIds] =
    useState<string[]>(initialData); // [1, 2, 3

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovieIds));
  }, [favoriteMovieIds]);

  const toggleIsFavorite = (movieId: string) => {
    setFavoriteMovieIds((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };
  return { favoriteMovieIds, toggleIsFavorite };
};

export const useFetchMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const jsonResponse = await fetchPopularMovies();
        setMovies(jsonResponse.results);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    })();
  }, []);
  return { movies, hasError, isLoading };
};

export const useSearch = (
  initialParams: SearchParams,
  onChange: (params: SearchParams) => void
) => {
  const [searchParams, setSearchParams] = useState<SearchParams>(initialParams);
  const updateParams = (params: Partial<SearchParams>) => {
    const updatedParams = { ...searchParams, ...params };
    setSearchParams(updatedParams);
    onChange(updatedParams);
  };

  return { searchParams, updateParams };
};

export const isMatchingSearchParams = (
  movie: Movie,
  searchParams: SearchParams
): boolean => {
  const { pharse, minAvgRating } = searchParams;
  if (minAvgRating && movie.vote_average < minAvgRating) {
    return false;
  }
  if (pharse && !movie.title.toLowerCase().includes(pharse.toLowerCase())) {
    return false;
  }
  return true;
};

export const sortMovies =
  (sortBy: "title" | "rating" | "releaseDate") =>
  (a: Movie, b: Movie): number => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "rating") {
      return b.vote_average - a.vote_average;
    }
    return (
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  };
