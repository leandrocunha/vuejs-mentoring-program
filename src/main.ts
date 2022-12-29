import { createApp } from "vue";
import App from "./App.vue";
import LazyLoadDirective from "./directives/LazyLoadDirective";

const app = createApp(App);

app.directive("lazyload", LazyLoadDirective);
app.mount("#app");
