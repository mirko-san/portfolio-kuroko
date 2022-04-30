import { Client } from "@/core/client";
import { Module } from "vuex";
import { ListData } from "@/store";
import { Work } from "@/mock/types/work";

type Type = {
  works: Work[];
};

export const works: Module<Type, any> = {
  namespaced: true,
  state: {
    works: [],
  },
  mutations: {
    setWorks: (state, payload) => {
      state.works = payload;
    },
  },
  actions: {
    async fetchWorks({ commit }) {
      const client = new Client();
      const res = await client.get("work");
      commit("setWorks", res as ListData<Work>);
    },
  },
};
