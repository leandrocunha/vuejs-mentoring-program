import { defineStore } from "pinia";
import { api } from "@/api";

export interface IMovie {
  id: number;
  year: number;
  genres: string[];
  ratings: number[];
  poster: string;
  posterurl: string;
  contentRating: string;
  duration: string;
  releaseDate: string;
  averageRating: number;
  storyline: string;
  actors: string[];
  imdbRating: number;
  title: string;
}

export const useMovieStore = defineStore("movieStore", {
  state: (): { movies: IMovie[]; moviesList: IMovie[] } => ({
    movies: [],
    moviesList: [],
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
        this.$patch({ moviesList: [...result] });
      }
    },
    async loadMovies() {
      const movies = await api.fetchAllMovies();
      this.$patch({
        movies: [...movies],
        moviesList: [...movies],
      });
    },
  },
});
