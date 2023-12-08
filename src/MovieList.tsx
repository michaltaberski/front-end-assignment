import { Movie } from "./types";
import MovieCard from "./MovieCard";
import styled from "styled-components";

const MoviesGridWrapper = styled.div`
  display: grid;
  gap: 20px;

  // Mobile first (1 column)
  grid-template-columns: 1fr;

  // 2 columns
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // 4 columns
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <MoviesGridWrapper>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MoviesGridWrapper>
  );
};

export default MovieList;
