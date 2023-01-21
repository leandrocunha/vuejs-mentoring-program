import { setActivePinia, createPinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import ResultCount from "./ResultCount.vue";

describe("ResultCount", () => {
  let expectedResult: string;

  beforeEach(() => {
    setActivePinia(createPinia());
    expectedResult = "10 movie(s) found";
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(ResultCount, { props: { count: 10 } });
    expect(wrapper.html()).toContain(expectedResult);
  });
});
