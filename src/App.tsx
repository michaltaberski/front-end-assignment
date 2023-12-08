import React, { useState, useMemo } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import { Header, StatusText, Wrapper } from "./styles";
import { SearchParams } from "./types";
import {
  isMatchingSearchParams,
  sortMovies,
  useFavoriteMovies,
  useFetchMovies,
} from "./utils";

const App: React.FC = () => {
  const { favoriteMovieIds, toggleIsFavorite } = useFavoriteMovies();
  const { movies, isLoading, hasError } = useFetchMovies();
  const [searchParams, setSearchParams] = useState<SearchParams>({
    pharse: "",
    minAvgRating: 0,
    sortBy: "title",
  });
  const filteredMovies = useMemo(
    () =>
      movies
        .filter((movie) => isMatchingSearchParams(movie, searchParams))
        .sort(sortMovies(searchParams.sortBy)),
    [movies, searchParams]
  );

  return (
    <>
      <Header>Heimdall Movies</Header>
      <Wrapper>
        <SearchBar initialParams={searchParams} onChange={setSearchParams} />
        {isLoading ? (
          <StatusText>Loading...</StatusText>
        ) : hasError ? (
          <StatusText>Something went wrong :(</StatusText>
        ) : (
          <MovieList
            movies={filteredMovies}
            favoriteMovieIds={favoriteMovieIds}
            toggleIsFavorite={toggleIsFavorite}
          />
        )}
      </Wrapper>
    </>
  );
};

export default App;
