import { shallowMount } from "@vue/test-utils";
import MoviePoster from "./MoviePoster.vue";

describe("MoviePoster", () => {
  let expectedResult: string;

  beforeEach(() => {
    expectedResult =
      "http://image.tmdb.org/t/p/w500//2yhg0mZQMhDyvUQ4rG1IZ4oIA8L.jpg";
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(MoviePoster);
    expect(wrapper.attributes("src")).toBe(expectedResult);
  });
});
