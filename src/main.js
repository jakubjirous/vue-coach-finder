import { createApp } from 'vue';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge';
import BaseButton from './components/ui/BaseButton';
import BaseCard from './components/ui/BaseCard';
import BaseCheckbox from './components/ui/BaseCheckbox';
import BaseSpinner from './components/ui/BaseSpinner';
import router from './router';
import { store } from './store';

const app = createApp(App);

app
  .use(store)
  .use(router)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-badge', BaseBadge)
  .component('base-checkbox', BaseCheckbox)
  .component('base-spinner', BaseSpinner)
  .mount('#app');
