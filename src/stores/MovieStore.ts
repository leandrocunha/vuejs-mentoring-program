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
  state: (): { movies: IMovie[]; moviesList: IMovie[] } => ({
    movies: moviesData,
    moviesList: moviesData,
  }),
  actions: {
    movieById(state: { movies: IMovie[] }) {
      return (movieId: number) =>
        state.movies.filter((item: IMovie) => item.id === movieId)[0];
    },
    moviesByTitle(movieTitle: string) {
      const normalizedStr = movieTitle.toLowerCase();

      const result = this.movies.filter((item: IMovie) =>
        item.title.toLowerCase().includes(normalizedStr)
      );

      if (result.length) {
        this.$patch({ moviesList: result });
      }
    },
  },
});
