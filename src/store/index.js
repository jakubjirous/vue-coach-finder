import { createLogger, createStore, } from 'vuex';
import rootActions from './actions';
import rootGetters from './getters';
import { coachesModule } from './modules/coaches';
import { requestsModule } from './modules/requests';
import rootMutations from './mutations';

export const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'c3'
    };
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  plugins: [createLogger()],
});

