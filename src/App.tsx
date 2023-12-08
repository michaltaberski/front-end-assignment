import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import { fetchPopularMovies } from "./api";

const App: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    fetchPopularMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Heimdall Movies</h1>
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
