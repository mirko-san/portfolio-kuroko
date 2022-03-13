<template>
  <div class="home">
    <h1>This is a home page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Client } from "@/core/client";

export default defineComponent({
  name: "HomeView",
  created() {
    this.get();
  },
  methods: {
    async get() {
      const client = new Client();
      const res = await client.get("");
      console.log(res);
    },
  },
});
</script>
