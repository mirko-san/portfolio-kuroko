import { Client } from "@/core/client";
import { Module } from "vuex";
import { Work } from "@/mock/types/work";

type Type = {
  work: Work | undefined;
};

export const work: Module<Type, any> = {
  namespaced: true,
  state: {
    work: undefined,
  },
  mutations: {
    setWork: (state, payload) => {
      state.work = payload;
    },
  },
  actions: {
    async fetchWork({ commit }, { workId }) {
      const client = new Client();
      const res = await client.get(`work/${workId}`);
      commit("setWork", res as unknown as Work);
    },
  },
};
