import axios from 'axios';
import { createStore } from 'vuex';
import createMutationsSharer from 'vuex-shared-mutations';

export default createStore({
  plugins: [createMutationsSharer({ predicate: ["newNotificationMutation"] })],
  state: {
    panda: {
      image: '',
      fact: ''
    },
    loadingPanda: true,
    raccoon: {
      image: '',
      fact: ''
    },
    loadingRaccoon: true,
    notifications: []
  },
  getters: {
  },
  mutations: {
    getPandaMutation(state, panda){
      state.panda.image = panda.image;
      state.panda.fact = panda.fact;
      console.log(panda);
      state.loadingPanda = false;
    },
    getRaccoonMutation(state, raccoon){
      state.raccoon.image = raccoon.image;
      state.raccoon.fact = raccoon.fact;
      console.log(raccoon);
      state.loadingRaccoon = false;
    },
    newNotificationMutation(state, notification){
      state.notifications.push(notification);
    },
    deleteNotificationMutation(state){
      state.notifications.pop();
    }
  },
  actions: {
    async getPandaAction(context){
      let response = await axios.get("https://some-random-api.ml/animal/red_panda");
      context.commit('getPandaMutation', response.data);
    },
    async getRaccoonAction(context){
      let response = await axios.get("https://some-random-api.ml/animal/raccoon");
      context.commit('getRaccoonMutation', response.data);
    },
    newNotificationAction(context, notification) {
      context.commit('newNotificationMutation', notification);
    },
    deleteNotificationAction(context) {
      context.commit('deleteNotificationMutation');
    }
  },
  modules: {
  }
})
