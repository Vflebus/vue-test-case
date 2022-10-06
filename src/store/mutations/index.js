import animalsGetters from "./animalsGetters";
import notifications from "./notifications";

export default mutations = {
    ...notifications,
    ...animalsGetters,
}