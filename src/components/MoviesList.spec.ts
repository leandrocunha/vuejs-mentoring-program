import { setActivePinia, createPinia } from "pinia";
import LazyLoadDirective from "@/directives/LazyLoadDirective";
import { mount } from "@vue/test-utils";
import MoviesList from "./MoviesList.vue";

describe("MoviesList", () => {
  let expectedResult: string;

  beforeEach(() => {
    setActivePinia(createPinia());
    expectedResult = "tall-section-title";
  });

  it("should render correctly", () => {
    const wrapper = mount(MoviesList, {
      global: {
        directives: { lazyload: LazyLoadDirective },
      },
    });
    const paragraph = wrapper.find("p");
    expect(paragraph.classes(expectedResult)).toBe(true);
  });
});
