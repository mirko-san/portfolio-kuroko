import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { works } from "./works";

interface State {
  count: number;
}

// 公式の Composition API で Vue コンポーネントを記述する際の案内に従って key を定義
// https://vuex.vuejs.org/ja/guide/typescript-support.html#usestore-%E9%96%A2%E6%95%B0%E3%81%AE%E5%9E%8B%E4%BB%98%E3%81%91
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    works,
  },
});
