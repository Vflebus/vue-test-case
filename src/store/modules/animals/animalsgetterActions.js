import axios from "axios";

const animalsActions = {
    async getPandaAction(context){
      try {
        let response = await axios.get("https://some-random-api.ml/animal/red_panda");
        context.commit('getPandaMutation', response.data);
        context.dispatch("newNotificationAction", {
          type: "success",
          message: "successfully loaded Panda !",
        }, {root: true});
      } catch {
        context.dispatch("newNotificationAction", {
          type: "error",
          message: "Couldn't load panda :(",
        }, {root: true});
      }
    },
    async getRaccoonAction(context){
      try {
        let response = await axios.get("https://some-random-api.ml/animal/raccoon");
        context.commit('getRaccoonMutation', response.data);
        context.dispatch("newNotificationAction", {
          type: "success",
          message: "successfully loaded raccoon !",
        }, {root: true});
      } catch {
        context.dispatch("newNotificationAction", {
          type: "error",
          message: "Couldn't load raccoon :(",
        }, {root: true});
      }
    },
}

export default animalsActions