export default animalsGetters = {
    async getPandaAction(context){
      let response = await axios.get("https://some-random-api.ml/animal/red_panda");
      context.commit('getPandaMutation', response.data);
    },
    async getRaccoonAction(context){
      let response = await axios.get("https://some-random-api.ml/animal/raccoon");
      context.commit('getRaccoonMutation', response.data);
    },
}