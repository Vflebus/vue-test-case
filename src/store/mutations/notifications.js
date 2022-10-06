export default notifications = {
    newNotificationMutation(state, notification){
      state.notifications.push(notification);
    },
    deleteNotificationMutation(state){
      state.notifications.pop();
    }
}