import { createLogger, createStore, } from 'vuex';
import rootActions from './actions';
import rootGetters from './getters';
import { coachesModule } from './modules/coaches';
import rootMutations from './mutations';

export const store = createStore({
  modules: {
    coaches: coachesModule,
  },
  state: {},
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  plugins: [createLogger()],
});

