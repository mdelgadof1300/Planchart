import { createStore } from "vuex";

export default createStore({
  state: {
    token: localStorage.getItem("token"),
    user: null,
  },
  mutations: {},
  actions: {},
  modules: {},
});
