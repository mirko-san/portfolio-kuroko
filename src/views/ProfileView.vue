<template>
  <div class="pt-4">
    <section class="d-flex justify-center mb-8">
      <v-avatar v-if="profile.iconImage.src" size="300" tile>
        <v-img :src="profile.iconImage.src">
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-row>
          </template>
        </v-img>
      </v-avatar>
    </section>

    <section>
      <v-card flat>
        <v-card-title v-text="'PROFILE'" />
        <v-card-text>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>名前</v-list-item-title>
              <v-list-item-subtitle>{{ profile.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>略歴</v-list-item-title>
              <v-list-item-subtitle>{{ profile.detail }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </section>

    <section>
      <v-card flat>
        <v-card-title v-text="'CONTACT'" />
        <v-card-text>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle>{{ profile.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Twitter</v-list-item-title>
              <v-list-item-subtitle v-text="profile.twitterUrl" />
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Instagram</v-list-item-title>
              <v-list-item-subtitle v-text="profile.instagramUrl" />
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Pixiv</v-list-item-title>
              <v-list-item-subtitle v-text="profile.pixivUrl" />
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </section>

    <!-- <section>
      <v-timeline>
        <v-timeline-item v-for="item in works" :key="item.title">
          <p>{{ item.title }}</p>
        </v-timeline-item>
      </v-timeline>
    </section> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Client } from "@/core/client";
import { Profile } from "@/mock/types/profile";
import { Work } from "@/mock/types/work";

export default defineComponent({
  name: "ProfileView",
  data() {
    return {
      profile: {} as Profile,
      works: [] as Work[],
    };
  },
  created() {
    this.getProfile();
    // this.getWork();
  },
  methods: {
    async getProfile() {
      const client = new Client();
      const res = await client.get("profile");
      console.log(res.items[0]);
      this.profile = res.items[0] as Profile;
    },
    // async getWork() {
    //   const client = new Client();
    //   const res = await client.get("work");
    //   console.log(res.items);
    //   this.works = res.items as Work[];
    // },
  },
});
</script>
