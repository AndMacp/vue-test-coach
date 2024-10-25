import { createStore } from 'vuex';
import coachesModule from './modules/coaches';
import requestsModule from './modules/requests';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },

  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setState(state, data) {
      state.isLoggedIn = data;
    },
  },

  actions: {
    authorized(context) {
      context.commit('setState', true);
    },

    notAuthorized(context) {
      context.commit('setState', false);
    },
  },

  getters: {
    getState(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
