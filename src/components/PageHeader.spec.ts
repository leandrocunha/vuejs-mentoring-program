import { setActivePinia, createPinia } from "pinia";
import { shallowMount } from "@vue/test-utils";
import PageHeader from "./PageHeader.vue";

describe("PageHeader", () => {
  let expectedResult: string;

  beforeEach(() => {
    setActivePinia(createPinia());
    expectedResult = "Header";
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(PageHeader);
    expect(wrapper.html()).toContain(expectedResult);
  });
});
