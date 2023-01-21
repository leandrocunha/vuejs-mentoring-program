import { shallowMount } from "@vue/test-utils";
import SearchFilter from "./SearchFilter.vue";

describe("SearchFilter", () => {
  let expectedResult: string;

  beforeEach(() => {
    expectedResult = "Search filter";
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(SearchFilter, {
      props: { label: "Search filter" },
    });
    expect(wrapper.html()).toContain(expectedResult);
  });
});
