import React, { useState, useEffect, useMemo } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import { fetchPopularMovies } from "./api";
import { Header, Wrapper } from "./styles";
import { Movie, SearchParams } from "./types";
import { isMatchingSearchParams, sortMovies } from "./utils";

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    pharse: "",
    minAvgRating: 0,
    sortBy: "title",
  });

  useEffect(() => {
    fetchPopularMovies().then((data) => setMovies(data.results));
  }, []);

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
        <MovieList movies={filteredMovies} />
      </Wrapper>
    </>
  );
};

export default App;
