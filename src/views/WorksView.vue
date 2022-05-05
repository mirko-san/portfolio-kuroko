<template>
  <div>
    <common-heading>
      <span v-text="'WORKS'" />
    </common-heading>

    <section class="mt-4">
      <v-row no-gutters>
        <v-col v-for="item in works.items" :key="item.id" cols="4">
          <v-card flat>
            <router-link
              :to="{ name: 'works/work', params: { workId: item.id } }"
            >
              <v-img :src="item.thumbnailImage.src" aspect-ratio="1">
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5" />
                  </v-row>
                </template>
              </v-img>
            </router-link>
          </v-card>
        </v-col>
      </v-row>

      <div class="d-flex justify-center pt-4">
        <v-btn>Load more</v-btn>
      </div>
    </section>

    <v-dialog v-model="dialog">
      <v-card>
        <v-card-text>
          <work-view v-if="workId" :workId="workId" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createNamespacedHelpers } from "vuex";
import { ListData } from "@/store";
import { Work } from "@/mock/types/work";
import CommonHeading from "@/components/common/CommonHeading.vue";

import WorkView from "./works/WorkView.vue";

const { mapState, mapActions } = createNamespacedHelpers("works");

export default defineComponent({
  name: "WorksView",
  components: {
    CommonHeading,
    WorkView,
  },
  created() {
    this.fetchWorks();
  },
  computed: {
    dialog(): boolean {
      return !!this.workId;
    },
    ...mapState({
      works: (state) => (state as any).works as ListData<Work>,
    }),
    workId() {
      return this.$route.params.workId;
    },
  },
  methods: {
    ...mapActions(["fetchWorks"]),
  },
});
</script>
