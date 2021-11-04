import coachesActions from './actions';
import coachesGetters from './getters';
import coachesMutations from './mutations';

export const coachesModule = {
  namespaced: true,
  state: {},
  getters: coachesGetters,
  mutations: coachesMutations,
  actions: coachesActions,
};
