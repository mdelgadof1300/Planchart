import { createStore } from "vuex";

export default createStore({
  state: {
    token: localStorage.getItem("token"),
  },
  mutations: {},
  actions: {},
  modules: {},
});
