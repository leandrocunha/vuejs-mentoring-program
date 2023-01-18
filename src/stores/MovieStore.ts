import { defineStore } from "pinia";
import moviesData from "../../data/movies.json";

interface IMovie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: null;
}

export const useMovieStore = defineStore("movieStore", {
  state: () => ({ movies: moviesData as IMovie[] }),
  getters: {
    movieById: (state) => {
      return (movieId: number) =>
        state.movies.filter((item: IMovie) => item.id === movieId)[0];
    },
    moviesByTitle: (state) => {
      return (movieTitle: string) =>
        state.movies.filter((item: IMovie) => item.title === movieTitle);
    },
  },
});
