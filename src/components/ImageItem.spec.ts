import { mount } from "@vue/test-utils";
import ImageItem from "./ImageItem.vue";
import LazyLoadDirective from "./../directives/LazyLoadDirective";

describe("Button", () => {
  let expectedResult: string;

  beforeEach(() => {
    expectedResult = "http://domain.com/myawesomeimage.jpg";
  });

  it("should render correctly", () => {
    const wrapper = mount(ImageItem, {
      global: {
        directives: { lazyload: LazyLoadDirective },
      },
      props: { source: "http://domain.com/myawesomeimage.jpg" },
    });
    const imageItem = wrapper.find("img");

    expect(imageItem.attributes("src")).toBe(expectedResult);
  });
});
