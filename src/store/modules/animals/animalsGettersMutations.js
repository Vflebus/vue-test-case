const animalMutations = {
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
}
export default animalMutations