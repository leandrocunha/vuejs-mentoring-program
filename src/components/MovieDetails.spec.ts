import { shallowMount } from "@vue/test-utils";
import MovieDetails from "./MovieDetails.vue";

describe("MovieDetails", () => {
  let expectedResult: string;

  beforeEach(() => {
    expectedResult = "Avengers";
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(MovieDetails, {
      props: { title: "Avengers" },
    });
    expect(wrapper.html()).toContain(expectedResult);
  });
});
