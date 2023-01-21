import { shallowMount } from "@vue/test-utils";
import Text from "./Text.vue";

describe("Text", () => {
  let expectedResult: string;

  beforeEach(() => {
    expectedResult = "My awesome text";
  });

  it("should render correctly", () => {
    const wrapper = shallowMount(Text, { props: { text: "My awesome text" } });
    expect(wrapper.html()).toContain(expectedResult);
  });
});
