import { createStore } from 'vuex';
import createMutationsSharer from 'vuex-shared-mutations';
import animalsModule from './modules/animals/animalsModule';
import notificationsModule from './modules/notifications/notificationsModule';

export default createStore({
  plugins: [createMutationsSharer({ predicate: ["newNotificationMutation"] })],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    animals: animalsModule,
    notifications: notificationsModule
  }
})
