import { createApp } from 'vue';
import BaseCard from './components/BaseCard.vue';
import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);
app.component('base-card',BaseCard)
app.component('base-badge', BaseBadge);

app.mount('#app');
