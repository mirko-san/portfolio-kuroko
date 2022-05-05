<template>
  <div>
    <router-link v-if="work" :to="{ name: 'works' }">
      <v-img :src="work.thumbnailImage.src" aspect-ratio="1">
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-row>
        </template>
      </v-img>
    </router-link>
    <v-row v-else class="fill-height ma-0" align="center" justify="center">
      <v-progress-circular indeterminate color="grey lighten-5" />
    </v-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createNamespacedHelpers } from "vuex";
import { Work } from "@/mock/types/work";

const { mapState, mapActions } = createNamespacedHelpers("work");

export default defineComponent({
  name: "WorkView",
  props: ["workId"],
  created() {
    this.fetchWork({ workId: this.workId });
  },
  computed: {
    ...mapState({
      work: (state) => (state as any).work as Work,
    }),
  },
  methods: {
    ...mapActions(["fetchWork"]),
  },
});
</script>
