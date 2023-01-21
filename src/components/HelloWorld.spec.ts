import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";

describe("Hello World", () => {
  let expectedResult: string;

  beforeEach(() => {
    expectedResult = "Hello World";
  });

  it("should render correctly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello World" } });
    expect(wrapper.html()).toContain(expectedResult);
  });
});
