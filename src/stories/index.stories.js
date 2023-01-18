import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import InputCpt from "../components/Input.vue";
import TextCpt from "../components/Text.vue";
import ButtonDefault from "../components/Button.vue";
import SearchFilterCpt from "../components/SearchFilter.vue";
import ResultCountCpt from "../components/ResultCount.vue";
import MovieDurationCpt from "../components/MovieDuration";
import SearchFormCpt from "../components/SearchForm.vue";

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

const SearchFilterTemplate = (args) => ({
  components: { SearchFilterCpt },
  setup() {
    return { args };
  },
  template: '<SearchFilterCpt v-bind="args" />',
});

export const SearchFilter = SearchFilterTemplate.bind({});
SearchFilter.args = {
  label: "Search by",
};

const ResultCountTemplate = (args) => ({
  components: { ResultCountCpt },
  setup() {
    return { args };
  },
  template: `<ResultCountCpt v-bind="args" />`,
});

export const ResultCount = ResultCountTemplate.bind({});
ResultCount.args = {
  count: 7,
};

const DurationTemplate = (args) => ({
  components: { MovieDurationCpt },
  setup() {
    return { args };
  },
  template: `<MovieDurationCpt v-bind="args" />`,
});

export const MovieDuration = DurationTemplate.bind({});
MovieDuration.args = {
  length: 154,
};

const SearchFormTemplate = (args) => ({
  components: { SearchFormCpt },
  search() {
    return { args };
  },
  template: `<SearchFormCpt />`,
});
export const SearchForm = SearchFormTemplate.bind({});
