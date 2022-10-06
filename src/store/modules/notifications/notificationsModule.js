import notificationsActions from "./notificationsActions";
import notificationsMutations from "./notificationsMutations";


const notificationsModule = {
    state: {
        notifications: []
    },
    mutations: notificationsMutations,
    actions: notificationsActions
}

export default notificationsModule;