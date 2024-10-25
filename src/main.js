import { createApp } from 'vue';
import App from './App.vue';
import Router from './router';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import Store from './store/index.js';
import BaseSpinner from './components/UI/BaseSpinner.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-spinner', BaseSpinner)

app.use(Router);
app.use(Store);
app.mount('#app');
