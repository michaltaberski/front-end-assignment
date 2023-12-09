export type Movie = {
  id: string;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
};

export type SearchParams = {
  pharse: string;
  minAvgRating: number;
  sortBy: "title" | "rating" | "releaseDate";
};
