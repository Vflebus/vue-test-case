import animalsGetters from "../mutations/animalsGetters";
import notifications from "./notifications";

export default actions = {
    ...notifications,
    ...animalsGetters
}