import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import InputCpt from "../components/Input.vue";
import TextCpt from "../components/Text.vue";
import ButtonDefault from "../components/Button.vue";
import SearchFilterCpt from "../components/SearchFilter.vue";
import ResultCountCpt from "../components/ResultCount.vue";

export default {
  title: "Atomic",
};

export const Input = () => ({
  render() {
    return <InputCpt />;
  },
});

export const Text = () => ({
  render() {
    return <TextCpt text="Find your move" />;
  },
});

export const Button = () => ({
  render() {
    return <ButtonDefault>Search</ButtonDefault>;
  },
});

export const SearchFilter = () => ({
  render() {
    return <SearchFilterCpt label="Search by" />;
  },
});

export const ResultCount = () => ({
  render() {
    return <ResultCountCpt count="{{7}}" />;
  },
});
