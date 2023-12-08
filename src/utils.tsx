import { useState } from "react";
import { Movie, SearchParams } from "./types";

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
