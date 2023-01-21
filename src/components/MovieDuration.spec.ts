import { shallowMount } from "@vue/test-utils";
import MovieDuration from "./MovieDuration.vue";

describe("MovieDuration", () => {
  let expectedResult: string;

  beforeEach(() => {
    expectedResult = `${100} min`;
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(MovieDuration, { props: { length: 100 } });
    expect(wrapper.html()).toContain(expectedResult);
  });
});
