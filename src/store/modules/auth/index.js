import authActions from './actions';
import authGetters from './getters';
import authMutations from './mutations';

export const authModule = {
  state() {
    return {
      token: null,
      userId: null,
      tokenExpiration: null
    };
  },
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};
