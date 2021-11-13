import requestsActions from './actions';
import requestsGetters from './getters';
import requestsMutations from './mutations';

export const requestsModule = {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      requests: []
    };
  },
  getters: requestsGetters,
  mutations: requestsMutations,
  actions: requestsActions,
};
