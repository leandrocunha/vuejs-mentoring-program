import { app } from '@storybook/vue3';
import { createPinia } from 'pinia';

const pinia = createPinia();

app.use(pinia);
