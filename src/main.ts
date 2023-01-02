import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import LazyLoadDirective from "./directives/LazyLoadDirective";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.directive("lazyload", LazyLoadDirective);
app.mount("#app");
