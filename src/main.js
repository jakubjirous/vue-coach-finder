import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

const BaseCard = () => import('./components/ui/BaseCard');
const BaseButton = () => import('./components/ui/BaseButton');
const BaseBadge = () => import('./components/ui/BaseBadge');
const BaseCheckbox = () => import('./components/ui/BaseCheckbox');
const BaseDialog = () => import('./components/ui/BaseDialog');
const BaseSpinner = () => import('./components/ui/BaseSpinner');

const app = createApp(App);

app
  .use(store)
  .use(router)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-badge', BaseBadge)
  .component('base-checkbox', BaseCheckbox)
  .component('base-spinner', BaseSpinner)
  .component('base-dialog', BaseDialog)
  .mount('#app');
