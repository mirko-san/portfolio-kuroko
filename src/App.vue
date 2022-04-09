<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="bg-primary">
      <v-list nav color="primary">
        <v-list-item>
          <router-link :to="{ name: 'home' }" class="text-white">
            <span>home</span>
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'works' }" class="text-white">
            <span>works</span>
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'fanarts' }" class="text-white">
            <span>fanarts</span>
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link :to="{ name: 'profile' }" class="text-white">
            <span>profile</span>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      drawer: false,
    };
  },
});
</script>

<style scoped>
.v-app-bar >>> .v-btn {
  /* ここできたら変数で primary を使うようにしたい */
  color: #7414a0;
}
</style>
