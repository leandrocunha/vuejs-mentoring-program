import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";
import SearchForm from "./SearchForm.vue";

describe("SearchForm", () => {
  let expectedResult: string;

  beforeEach(() => {
    setActivePinia(createPinia());
    expectedResult = '<input type="text">';
  });

  it("should render correctly", () => {
    const wrapper = mount(SearchForm);
    expect(wrapper.html()).toBe(expectedResult);
  });
});
