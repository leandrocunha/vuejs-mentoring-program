const BASE_URL = "https://tame-erin-pike-toga.cyclic.app";

export const api = {
  async fetchAllMovies() {
    const response = await fetch(`${BASE_URL}/movies`);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const body = await response.json();

    return body;
  },
};
