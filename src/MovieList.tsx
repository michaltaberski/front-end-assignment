import { FC } from "react";

interface MovieListProps {
  movies: any[];
}

const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.title}</p>
          <p>{movie.vote_average}</p>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
