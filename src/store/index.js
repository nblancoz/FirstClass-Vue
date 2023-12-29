import { createStore } from "vuex";
import todos from "./modules/todos";
import count from "./modules/count";

const store = createStore({
  modules: {
    count,
    todos,
  },
});

export default store;
