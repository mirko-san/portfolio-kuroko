<template>
  <div class="home">
    <section>
      <v-parallax
        height="300"
        :src="core.heroImage.src"
        class="d-flex align-center"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h4 pt-4">{{ core.siteName }}</h1>
            <h4 class="pt-4">{{ core.siteDescription }}</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Client } from "@/core/client";
import { Core } from "@/mock/types/core";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      core: {} as Core,
    };
  },
  created() {
    this.get();
  },
  methods: {
    async get() {
      const client = new Client();
      const res = await client.get("core");
      this.core = res.items[0] as Core;
    },
  },
});
</script>
