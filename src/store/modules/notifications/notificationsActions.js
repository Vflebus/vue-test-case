const notificationsActions = {
  newNotificationAction(context, notification) {
    context.commit('newNotificationMutation', notification);
  },
  deleteNotificationAction(context) {
    context.commit('deleteNotificationMutation');
  }
}
export default notificationsActions
