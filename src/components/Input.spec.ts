import { mount } from "@vue/test-utils";
import InputVue from "./Input.vue";

describe("Input", () => {
  let expectedResult: string;

  beforeEach(() => {
    expectedResult = "Find your movie";
  });
  it("should render correctly", () => {
    const wrapper = mount(InputVue);
    expect(wrapper.attributes("placeholder")).toBe(expectedResult);
  });
});
