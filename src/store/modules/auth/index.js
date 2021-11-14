import authActions from './actions';
import authGetters from './getters';
import authMutations from './mutations';

export const authModule = {
  state() {
    return {
      token: null,
      userId: null,
      didAutoLogout: false
    };
  },
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};
