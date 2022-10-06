import animalsActions from "./animalsgetterActions";
import animalMutations from "./animalsGettersMutations";

const animalsModule = {
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
    },
    mutations: animalMutations,
    actions: animalsActions
}

export default animalsModule;