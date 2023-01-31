import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import MovieDetails from "./views/MovieDetails.vue";
import LazyLoadDirective from "./directives/LazyLoadDirective";

const routes = [
  { path: "/", component: Home },
  { path: "/movie/:movieSlug", component: MovieDetails, name: "movie" },
];

const pinia = createPinia();
const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(pinia);
app.use(router);
app.directive("lazyload", LazyLoadDirective);
app.mount("#app");
