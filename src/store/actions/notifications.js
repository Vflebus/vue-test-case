export default notifications = {
    newNotificationAction(context, notification) {
      context.commit('newNotificationMutation', notification);
    },
    deleteNotificationAction(context) {
      context.commit('deleteNotificationMutation');
    }
}