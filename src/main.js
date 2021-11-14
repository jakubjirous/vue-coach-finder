import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

const BaseCard = defineAsyncComponent(() => import('./components/ui/BaseCard'));
const BaseButton = defineAsyncComponent(() => import('./components/ui/BaseButton'));
const BaseBadge = defineAsyncComponent(() => import('./components/ui/BaseBadge'));
const BaseCheckbox = defineAsyncComponent(() => import('./components/ui/BaseCheckbox'));
const BaseDialog = defineAsyncComponent(() => import('./components/ui/BaseDialog'));
const BaseSpinner = defineAsyncComponent(() => import('./components/ui/BaseSpinner'));

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
