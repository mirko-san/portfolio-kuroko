<template>
  <div>
    <v-card flat>
      <v-card-title v-text="'WORKS'" />
      <v-card-text>
        <section>
          <v-row>
            <v-col
              v-for="item in works"
              :key="item._id"
              class="d-flex child-flex"
              cols="4"
            >
              <v-img
                :src="item.thumbnailImage.src"
                aspect-ratio="1"
                @click="selectedImage = item.image.src"
              >
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
            </v-col>
          </v-row>

          <div class="d-flex justify-center pt-4">
            <v-btn>Load more</v-btn>
          </div>
        </section>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" @click:outside="selectedImage = ''">
      <v-card>
        <v-card-text>
          <v-img :src="selectedImage" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Client } from "@/core/client";
import { Work } from "@/mock/types/work";

export default defineComponent({
  name: "WorksView",
  data() {
    return {
      works: [] as Work[],
      selectedImage: "",
    };
  },
  created() {
    this.getWork();
  },
  computed: {
    dialog(): boolean {
      return !!this.selectedImage;
    },
  },
  methods: {
    async getWork() {
      const client = new Client();
      const res = await client.get("work");
      this.works = res.items as Work[];
    },
  },
});
</script>
