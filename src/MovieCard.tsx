import styled from "styled-components";
import { Movie } from "./types";
import { primaryColor, secondaryColor } from "./styles";

const CardWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${secondaryColor};
  overflow: hidden;
`;

const CardDetails = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  padding: 0;
`;

const VoteScore = styled.p`
  background-color: ${primaryColor};
  padding: 8px;
  border-radius: 4px;
`;

const roundToDecimal = (num: number) => Math.round(num * 10) / 10;

const MovieList = ({ movie }: { movie: Movie }) => {
  return (
    <CardWrapper>
      <img
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt={movie.title}
      />
      <CardDetails>
        <FlexRow>
          <Title>{movie.title}</Title>
          <VoteScore>{roundToDecimal(movie.vote_average)}</VoteScore>
        </FlexRow>
        <FlexRow>
          <div>Release date:</div>
          <strong>{movie.release_date}</strong>
        </FlexRow>
      </CardDetails>
    </CardWrapper>
  );
};

export default MovieList;