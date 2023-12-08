import { Movie } from "./types";
import MovieCard from "./MovieCard";
import styled from "styled-components";
import { StatusText } from "./styles";

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

type MovieListProps = {
  movies: Movie[];
  favoriteMovieIds: string[];
  toggleIsFavorite: (movieId: string) => void;
};

const MovieList = ({
  movies,
  favoriteMovieIds,
  toggleIsFavorite,
}: MovieListProps) => {
  return movies.length ? (
    <MoviesGridWrapper>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          toggleIsFavorite={toggleIsFavorite}
          isFavorite={favoriteMovieIds.includes(movie.id)}
        />
      ))}
    </MoviesGridWrapper>
  ) : (
    <StatusText>No movies found</StatusText>
  );
};

export default MovieList;
