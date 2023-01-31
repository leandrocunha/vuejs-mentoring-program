import { mount } from "@vue/test-utils";
import ButtonVue from "./Button.vue";

describe("Button", () => {
  let expectedResult: string;

  beforeEach(() => {
    expectedResult =
      '<button class="button is-primary">My Awesome Btn</button>';
  });
  it("should render correctly", () => {
    const wrapper = mount(ButtonVue, { slots: { default: "My Awesome Btn" } });
    expect(wrapper.html()).toContain(expectedResult);
  });
});
