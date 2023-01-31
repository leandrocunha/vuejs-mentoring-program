import { shallowMount } from "@vue/test-utils";
import { setActivePinia, createPinia } from "pinia";
import PageHeaderVue from "./components/PageHeader.vue";
import AppVue from "./App.vue";

describe("App", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(AppVue);
    expect(wrapper.findComponent(PageHeaderVue)).toBeTruthy();
  });
});
