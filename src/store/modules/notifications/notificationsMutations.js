const notificationsMutations = {
    newNotificationMutation(state, notification){
      state.notifications.push(notification);
    },
    deleteNotificationMutation(state){
      state.notifications.pop();
    }
}

export default notificationsMutations